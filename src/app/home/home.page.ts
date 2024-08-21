import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user:any
  constructor(private authService:AuthService,private router:Router) {}

  ngOnInit()  {
  }

  async signIn(){
    this.user = await this.authService.googleSignIn()
    console.log(this.user);
    
    if(this.user){
      this.router.navigate(['/select'])
    }
  }
}
