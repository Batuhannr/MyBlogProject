import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    
  }

}
