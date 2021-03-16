import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { AuthService } from '../shared/auth.service';
import { ToastService } from '../shared/toasts-container/toast-service';
import { REGISTER } from '../shared/url';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form!: FormGroup;
  error: string = "";
  hideCpassword = false;
  hidepassword = false;
  constructor(private fb:FormBuilder,private api:ApiService,private router:Router, private authService: AuthService,private toastService:ToastService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      first_name:[null,[Validators.required]],
      last_name:[null,[Validators.required]],
      email:[null,[Validators.required,,Validators.email]],
      password:[null,[Validators.required, Validators.minLength(4)]],
      cpassword:[null,[Validators.required]],
      // remember: [false]
    }, {validator: this.checkIfMatchingPasswords('password', 'cpassword')})
  }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];

      if (passwordConfirmationInput.errors && !passwordConfirmationInput.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  submit() {
    if (this.form.valid) {
      this.doRegister();
      // this.submitEM.emit(this.form.value);
    }
  }

  doRegister(){
    // this.spiner=true;
    this.api.post(REGISTER,this.form.value).subscribe(res=>{
      this.authService.setLocalStorage('token', res.token);
      this.authService.setLocalStorage('userData', res.user);
      this.router.navigate(['/']);      
    },err =>{
      this.error=err.error[0]
      this.toastService.show(this.error, { classname: 'bg-danger text-light', delay: 5000 });   
    })
  }

}
