import { Component, OnInit } from '@angular/core';
import { ResultModel } from 'src/app/Models/ResultModel';
import { ApiService } from 'src/app/Services/apiService';
import { MyAlertService } from 'src/app/Services/MyAlertService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alertmessage: string[] = ["Kullanıcı Adı Veya Parola Geçersiz"];
  constructor(
    public apiServis: ApiService,
    public alert: MyAlertService,
  ) { }

  ngOnInit() {
  }
  OturumAc(KullaniciAdi: string, parola: string) {
    this.apiServis.getToken(KullaniciAdi, parola).subscribe((d: any) => {
      
      if (d.Id != null) {
        localStorage.setItem("token", d.access_token);
        localStorage.setItem("Id", d.Id);
        localStorage.setItem("UserName", d.UserName);
        location.href = "/";
      }
      else{
        alert("hata");
      }

    })
  }
}