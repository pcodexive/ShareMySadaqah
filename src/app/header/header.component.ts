import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loginFlag:any;
  constructor( private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loginFlag=this.authService.getToken();
   }
   onLogout(){
    if(this.authService.getToken()){
      this.authService.logout();
      this.router.navigate(['/']); 
      this.loginFlag=this.authService.getToken();
    }
   }
}
