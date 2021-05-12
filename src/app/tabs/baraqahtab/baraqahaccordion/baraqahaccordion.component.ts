import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { ToastService } from 'src/app/shared/toasts-container/toast-service';

@Component({
  selector: 'app-baraqahaccordion',
  templateUrl: './baraqahaccordion.component.html',
  styleUrls: ['./baraqahaccordion.component.scss']
})
export class BaraqahaccordionComponent implements OnInit {

  constructor(private fb:FormBuilder,private toastService:ToastService,private authService:AuthService) { }
  selectedItem=-1;
  priceContent = [
    {
      price: "+£0.30"
    },
    {
      price: "+£0.40"
    },
    {
      price: "+£0.50"
    },
    {
      price: "+£0.60"
    }
  ]

  form!:FormGroup;
  submitted=false;
  toggle1: boolean = false;
  clicktoggle1(){
    this.toggle1 = !this.toggle1;       
  };
  toggle2: boolean = true;
  clicktoggle2(){
    this.toggle2 = !this.toggle2; 
  }
  toggle3: boolean = true;
  clicktoggle3(){
    this.toggle3 = !this.toggle3; 
  }
  toggle4: boolean = true;
  clicktoggle4(){
    this.toggle4 = !this.toggle4; 
  }
  toggle5: boolean = true;
  clicktoggle5(){
    this.toggle5 = !this.toggle5; 
  }
    
  ngOnInit(): void {
    this.form =this.fb.group({     
      type : new FormControl(null, [Validators.required]) ,
      fname : new FormControl(null, [Validators.required]),
      lname  : new FormControl(null, [Validators.required]),
      address : new FormControl(null, [Validators.required]),
      city  : new FormControl(null, [Validators.required]),
      county  : new FormControl(null, [Validators.required]),
      postcode  : new FormControl(null, [Validators.required]),       
    })
  }
  onSubmit(){
    this.submitted=true;
    if (this.form.invalid) {
      return;
   }
    if(this.form){
    let data =this.authService.getLocalStorage('tabData');
    data.addressData=this.form.value;
    this.authService.setLocalStorage('tabData',data);
    this.toastService.show("Successfully added", { classname: 'bg-success text-light', delay: 5000 });    
    }
  }
}
