import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import * as _ from "lodash";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loginFlag:any;
  cartDataCount=0;
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
   getCart(){
    if(this.authService.getLocalStorage('giftCartData')){
      let count=this.authService.getLocalStorage('giftCartData');
      console.log(count);
      
      this.cartDataCount=_.size(count)
    }
   }
}
