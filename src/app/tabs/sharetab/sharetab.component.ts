import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/shared/auth.service';
import * as _ from "lodash";
import { ToastService } from 'src/app/shared/toasts-container/toast-service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-sharetab',
  templateUrl: './sharetab.component.html',
  styleUrls: ['./sharetab.component.scss']
})
export class SharetabComponent implements OnInit{
  @Output() onTabClick: EventEmitter<any> = new EventEmitter();
  @Output() passOccasion: EventEmitter<any> = new EventEmitter();
  @Output() passShareformData: EventEmitter<any> = new EventEmitter();
  @Input() gift:any;
  @Input() dataObj:any;
  otherButton=true;
  shareLove='';
  constructor(private fb:FormBuilder,private modalService:NgbModal,private authService: AuthService,
    private toastService:ToastService) { }
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
  closeResult = '';
  shareTabData:any;
  submitted=false;
  
  
  ngOnInit(): void {
    if(this.dataObj && this.dataObj.alive && this.dataObj.alive.name){
      this.shareLove=this.dataObj.alive.name;
    }
    if(this.dataObj && this.dataObj.gift){
      if(this.dataObj.gift.singleGift) {  
      this.giftData={
        "bgcolor":this.dataObj.gift.singleGift.bgcolor,
        "givenow":this.dataObj.gift.singleGift.givenow,
        "image":this.dataObj.gift.singleGift.image,
        'name':this.dataObj.gift.singleGift.name
      }}
      else if(this.dataObj.gift.giftBox)   {
      this.giftData={
        "bgcolor":this.dataObj.gift.giftBox.bgcolor,
        "givenow":this.dataObj.gift.giftBox.givenow,
        "image":this.dataObj.gift.giftBox.image,
        'name':this.dataObj.gift.giftBox.name
      }
    }}else{
        this.giftData={
          "image":'assets/images/water-img.png',
          'name':'Water'
    }
  }
 

    this.form =this.fb.group({     
      recipients_email :  this.dataObj.memory > 0 ? new FormControl(null):new FormControl(null, [Validators.required,Validators.email]) ,
      fname : new FormControl(null, [Validators.required]),
      senders_email  : new FormControl(null, [Validators.required,Validators.email]),
      senders_fname : new FormControl(null, [Validators.required]),
      confirm_email  : new FormControl(null, [Validators.required,Validators.email]),
      password  : new FormControl(null, [Validators.required]),
      confirm_password  : new FormControl(null, [Validators.required]), 
      
    }, {validator: this.checkIfMatchingPasswords('password', 'confirm_password')})
    this.occasion =this.fb.group({
      occasion : new FormControl(null, [Validators.required])
    })
    if(this.dataObj && this.dataObj.shareForm){
      // console.log(this.dataObj?.shareForm?.recipients_email);
      let fromdata = this.dataObj.shareForm ;
  
    this.form.patchValue({
      recipients_email: `${fromdata.recipients_email ? fromdata.recipients_email : ''}`,
      fname: `${fromdata.recipients_email ? fromdata.fname : ''}`,
      senders_email: `${fromdata.recipients_email ? fromdata.senders_email : ''}`,
      senders_fname: `${fromdata.recipients_email ? fromdata.senders_fname : ''}`,
      confirm_email: `${fromdata.recipients_email ? fromdata.confirm_email : ''}`,
      password: `${fromdata.recipients_email ? fromdata.password : ''}`,
      confirm_password: `${fromdata.recipients_email ? fromdata.confirm_password : ''}`,
    })
  }
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
    if(!this.form.invalid){
      this.onTabClick.emit("Baraqah");
    }else{
      const openLocationRef =  this.modalService.open(ModalComponent)
      let data = {
        color :'#2D90CE',
        title: 'Please fill the form first to continue'
      }
    openLocationRef.componentInstance.data = data;
    // this.toastService.show("Please fill the form first", { classname: 'bg-danger text-light', delay: 5000 });    
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    return;    
  }
  goToBackStep(){
    this.onTabClick.emit("Gift");
  }
  onAddOtherShare(occasion:any){  
    if(occasion ==='other'){
      if(this.occasion.get('occasion')?.value){
        let data = this.occasion.get('occasion')?.value;
        this.passOccasion.emit(data);
      }
    }else
    {
     this.passOccasion.emit(occasion);
    }   
  }
  onSubmit() {
    this.submitted=true;
    if (this.form.invalid) {
      return;
   }
    if(this.form){
      this.passShareformData.emit(this.form.value);
      this.toastService.show("Successfully added", { classname: 'bg-success text-light', delay: 5000 });    
    }
    // this.form.reset();
  }

  open(giftmodal:any) {
    this.modalService.open(giftmodal, {ariaLabelledBy: 'modal-basic-title',windowClass: 'share-tab-content ',centered: true}).result.then((result:any) => {  
    // this.giftAmount.emit(this.form.get('amount')?.value);   
    this.closeResult = `Closed with: ${result}`;
  }, (reason:any) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}

selectedGiftItem(index:any,content:any){
  var giftCartData=[{
    "bgcolor":content.bgcolor,
    "image":content.image,
    "name":content.name,
    'price':content.price,
    'index':index
  }];
  var item='';
  if(this.authService.getLocalStorage('giftCartData')){
    var localStoreData = this.authService.getLocalStorage('giftCartData');
    item = _.find(localStoreData, function(o) {
      // console.log(o,"giftCartData",giftCartData[index]);      
      return o ==  giftCartData[index]
    });
    let giftCartData1= _.concat(localStoreData,giftCartData);
    this.authService.setLocalStorage('giftCartData',giftCartData1);
  }
  else{
    let giftCartData1= _.merge(giftCartData);
    this.authService.setLocalStorage('giftCartData',giftCartData1);  
  }
}

}
