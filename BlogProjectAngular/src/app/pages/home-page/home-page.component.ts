import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostModel } from 'src/app/Models/PostModel';
import { ApiService } from 'src/app/Services/apiService';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  posts: PostModel[] = [];
  marketingData: any = [
    {
      title: 'Heading',
      decription: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZt0h5A35LHrauX4SLMDBlYbuwBclkGxrMkKf4JxYhyRfNNPi-boQwC3na3IgY4WI3AZo&usqp=CAU'
    }, {
      title: 'Heading',
      decription: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZt0h5A35LHrauX4SLMDBlYbuwBclkGxrMkKf4JxYhyRfNNPi-boQwC3na3IgY4WI3AZo&usqp=CAU'
    }, {
      title: 'Heading',
      decription: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZt0h5A35LHrauX4SLMDBlYbuwBclkGxrMkKf4JxYhyRfNNPi-boQwC3na3IgY4WI3AZo&usqp=CAU'
    }
  ]
  constructor(public apiService: ApiService, private router: Router, private auth: AuthService) { }

  user: any;

  ngOnInit(): void {
    this.apiService.getlastCountPost(5).
      subscribe((result: PostModel[]) => {
        this.posts = result;
        console.log(result);
      });

    // this.auth.$user.subscribe(res => {
    
    //   this.user = res.users.filter((el: any) => el.age > 16)
    //   // this.user = res;
    //   console.log("res", res)
    // })

    // setTimeout(() => {
    //   this.auth.$user.next({name: 'TEST'})
    // }, 5000)
  }

  navigateToPost(Id: number) {
    this.router.navigate([`readpost/${Id}`])
  }

  marketingClicked() { }
}
