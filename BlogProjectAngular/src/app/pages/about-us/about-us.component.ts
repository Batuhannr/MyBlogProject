import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/Models/CategoryModel';
import { EmailModel } from 'src/app/Models/EmailModel';
import { PostModel } from 'src/app/Models/PostModel';
import { ResultModel } from 'src/app/Models/ResultModel';
import { ApiService } from 'src/app/Services/apiService';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./style.css','./aos.css','./aos-animation.css','./roadmap.css']
})
export class AboutUsComponent implements OnInit {
  posts: PostModel[] = [];
  category: CategoryModel[] = [];
  email : EmailModel = new EmailModel();

  constructor(private router: Router,public apiService: ApiService) { }

  ngOnInit(): void {
    this.GetCategory();
    this.apiService.getlastCountPost(5).
      subscribe((result: PostModel[]) => {
        this.posts = result;
        console.log(result);
      });
  }

  navigateToPost(Id: number) {
    this.router.navigate([`readpost/${Id}`])
  }
  GetCategory() {
    this.apiService.getCategory().
      subscribe((result: ResultModel) => {
        this.category = result.ResultObject as CategoryModel[];
      });
  }
  SendMail(name:string,subject:string,content:string,email:string){
    this.email.NameSurname = name;
    this.email.Content= content;
    this.email.Subject =subject;
    this.email.Email = email;
    this.apiService.sendEmail(this.email).subscribe((s)=>{
      if(s){
        alert("Mail Gönderildi")
      }
      else{
        alert("Hata Oluştu Tekrar Deneyin veya Manuel Gönderin")
      }
    })
  }
}
