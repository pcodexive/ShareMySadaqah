import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { AuthService } from '../shared/auth.service';
import { ToastService } from '../shared/toasts-container/toast-service';
import { LOGIN } from '../shared/url';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form!: FormGroup;

  error: string = "";
  hidepassword = false;
  constructor(private fb:FormBuilder,private api:ApiService,private router:Router, private authService: AuthService,private toastService:ToastService) {
    if(this.authService.getToken()){
      this.authService.logout();
      this.router.navigate(['/login']); 
    }
   }

  ngOnInit(): void {

    this.form = this.fb.group({
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required]],
      // remember: [false]
    })
  }

  submit() {
    if (this.form.valid) {
      this.doLogin();
      // this.submitEM.emit(this.form.value);
    }
  }

  doLogin(){
    // this.spiner=true;
    this.api.post(LOGIN,this.form.value).subscribe(res=>{
      this.authService.setLocalStorage('token', res.token);
      this.authService.setLocalStorage('userData', res.user);
      this.router.navigate(['/']);      
    },err =>{
      this.error=err.error[0];
      this.toastService.show(this.error, { classname: 'bg-danger text-light', delay: 5000 });    
    })
  }

}
