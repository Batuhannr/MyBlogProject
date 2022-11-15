using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using Microsoft.Owin.Security;

namespace BlogProjectWebApi.Auth
{
    public class AuthProvider : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }
        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var userService = new UserService();
            var user = userService.UyeLogin(context.UserName, context.Password);
            List<string> userAuthority = new List<string>();

            if (user != null)
            {
                string authority = "";
                if (user.Admin == 1)
                {
                    authority = "Admin";

                }
                else
                {
                    authority = "User";
                }
                userAuthority.Add(authority);

                var identity = new ClaimsIdentity(context.Options.AuthenticationType);

                identity.AddClaim(new Claim(ClaimTypes.Name, context.UserName));
                identity.AddClaim(new Claim(ClaimTypes.Role, authority));
                identity.AddClaim(new Claim(ClaimTypes.PrimarySid, user.Id.ToString()));

                AuthenticationProperties propert = new AuthenticationProperties(new Dictionary<string, string>
                {
                    { "Id", user.Id.ToString() },
                    { "userName", user.UserName },
                    { "userAuthority",Newtonsoft.Json.JsonConvert.SerializeObject(userAuthority) }

               });
                AuthenticationTicket ticket = new AuthenticationTicket(identity, propert);


                context.Validated(ticket);
            }
            else
            {
                context.SetError("Geçersiz istek", "Hatalı kullanıcı bilgisi");
            }



        }
        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(property.Key, property.Value);
            }

            return Task.FromResult<object>(null);
        }
    }
}