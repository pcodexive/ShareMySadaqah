import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-sharetab',
  templateUrl: './sharetab.component.html',
  styleUrls: ['./sharetab.component.scss']
})
export class SharetabComponent implements OnInit {
  @Output() onTabClick: EventEmitter<any> = new EventEmitter();
  @Input() gift:any;
  @Input() dataObj:any;
  otherButton=true;
  shareLove='';
  constructor(private fb:FormBuilder) { }
  selectedItem=-1;
  content = [
    {
      name: "Personalised e-Card",
      image: "./assets/images/personalised-e-card.png",
      price: "Free",
      bgcolor: "#ab6cad"
    },
    {
      name: "Postcard",
      image: "./assets/images/postcard.png",
      price: "£1.99",
      bgcolor: "#e6557f"
    },
    {
      name: "Box of Chocolates",
      image: "./assets/images/boxes-of-chocolates.png",
      price: "£4.99",
      bgcolor: "#2c8fcd"
    },
    {
      name: "Personalised Salah Mat",
      image: "./assets/images/personalised-salah-mat.png",
      price: "£14.95",
      bgcolor: "#0ea08f"
    },
    {
      name: "Dates",
      image: "./assets/images/dates.png",
      price: "£11.95",
      bgcolor: "#F79D11"
    },
    {
      name: "Zam Zam Water",
      image: "./assets/images/zam-zam-water.png",
      price: "£7.99",
      bgcolor: "#ab6cad"
    }
  ];
  dveliverySelectedItem=-1;
  dveliveryContent = [
    {
      name: "Royal Mail Special Delivery Guaranteed by 1pm®",
      text: "Guaranteed by 1pm next-day",
      price: "6.75"
    },
    {
      name: "Royal Mail Signed For® 1st Class",
      text: "Signature on delivery and next-day delivery aim",
      price: "2.25"
    },
    {
      name: "Royal Mail 1st Class",
      text: "Next-day delivery aim for letters and parcels",
      price: "2.25"
    },
    {
      name: "Royal Mail 2nd Class",
      text: "Delivery in two to three working days",
      price: "0.66"
    }
  ];
  binding:any;
  selectedToday=-1;
  form!:FormGroup;
  occasion!:FormGroup;
  giftData:any;
  ngOnInit(): void {
    console.log(this.dataObj);
    
    if(this.dataObj && this.dataObj.alive && this.dataObj.alive.name){
      this.shareLove=this.dataObj.alive.name;
    }
    if(this.dataObj && this.dataObj.gift){
      this.giftData={
        "bgcolor":this.dataObj.gift.bgcolor,
        "givenow":this.dataObj.gift.givenow,
        "image":this.dataObj.gift.image,
        'name':this.dataObj.gift.name
      }
    }
    
    this.form =this.fb.group({
     
      recipients_email :  this.dataObj.memory ? new FormControl(null):new FormControl(null, [Validators.required,Validators.email]) ,
      fname : new FormControl(null, [Validators.required]),
      senders_email  : new FormControl(null, [Validators.required,Validators.email]),
      senders_fname : new FormControl(null, [Validators.required]),
      confirm_email  : new FormControl(null, [Validators.required,Validators.email]),
      password  : new FormControl(null, [Validators.required, Validators.minLength(4)]),
      confirm_password  : new FormControl(null, [Validators.required]), 
      
    }, {validator: this.checkIfMatchingPasswords('password', 'confirm_password')})
    this.occasion =this.fb.group({
      occasion : new FormControl(null, [Validators.required])
    })
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
  addOtherShare(){
    this.otherButton=false;
  } 
  goToNextStep(){
    this.onTabClick.emit("Baraqah");
  }
  goToBackStep(){
    this.onTabClick.emit("Gift");
  }
  onAddOtherShare(){
    if(this.occasion.get('occasion')?.value){
      let occasion =this.occasion.get('occasion')?.value;
    }        
  }


}
