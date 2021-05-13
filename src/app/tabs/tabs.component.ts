import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import * as _ from "lodash";
import { ToastService } from '../shared/toasts-container/toast-service';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  charity=-1;
  @Output() data:any={};  
  activeTab="Charity";
  constructor(private authService: AuthService,private toastService:ToastService,private modalService: NgbModal) { }

  ngOnInit(): void {   
    // console.log("tab");

    this.data=this.authService.getLocalStorage('tabData');
    // console.log("data",this.data);
    
    if(this.data && this.data.charity >= 0){
      this.charity=this.data.charity      
    }

  }

  setActiveTab(tab:any) {
    // console.log("tab", this.data,this.charity);
    // console.log("data",this.data);

    switch(tab) {
      case 'Charity':
        if(tab=='Charity' && this.charity >=0 ){
          this.activeTab = tab;
        }
        break;
      case 'Beloved':
        // console.log(this.charity);
        
        if(this.charity >=0){
          this.activeTab = tab;
        }else{
          this.openWarringPopup('#AB57A2', 'Please select a charity to continue');  
        }
        // code block
        break;
      case 'Gift':
        if((this.data && this.data.alive && this.data.alive.index) >= 0 || (this.data && this.data.memory )>= 0){
          this.activeTab = tab;
        }
        else if(this.charity < 0){
          this.openWarringPopup('#AB57A2', 'Please select a charity to continue');  
          this.activeTab = 'Charity';
        }
         else{
          this.openWarringPopup('#E6557F', 'Please select a your loved to continue');  
          this.activeTab = 'Beloved';
        }
        // code block
        break;
      case 'Share':
        console.log(((this.data && this.data.gift && this.data.gift.singleGift && this.data.gift.singleGift.length > 0) ) || 
        (this.data && this.data.gift && this.data.gift.giftBox && this.data.gift.giftBox.index) >= 0 );
        
        if(((this.data && this.data.gift && this.data.gift.singleGift && this.data.gift.singleGift.length > 0) ) || 
        (this.data && this.data.gift && this.data.gift.giftBox && this.data.gift.giftBox.index >= 0 ) ){
          this.activeTab = tab;
        }
        else if(this.charity < 0){
          this.openWarringPopup('#AB57A2', 'Please select a charity to continue');  
          this.activeTab = 'Charity';
          
        }
        else if ((!this.data?.alive && !this.data?.memory )){
          this.openWarringPopup('#E6557F', 'Please select a your loved to continue');
          this.activeTab = 'Beloved';
        }      
        else{
          this.openWarringPopup('#0EA08F', 'Please select a cause to continue');
          this.activeTab = 'Gift';
        }
        // code block
        break;
      case 'Baraqah':
        if(this.data && this.data.shareForm){
          this.activeTab = tab;
        }
        else if(this.charity < 0){
          this.openWarringPopup('#AB57A2', 'Please select a charity to continue');  
        }
        else if ((!this.data?.alive && !this.data?.memory )){
          this.openWarringPopup('#E6557F', 'Please select a your loved to continue');
          this.activeTab = 'Beloved';
        }
        else if(!this.data.gift){
          this.openWarringPopup('#0EA08F', 'Please select a cause to continue');
          this.activeTab = 'Gift';
        }else{
          this.openWarringPopup('#2D90CE', 'Please fill the form first to continue');
          this.activeTab = 'Share';
         // this.toastService.show("Please fill the form first", { classname: 'bg-danger text-light', delay: 5000 });    
        }
        // code block
        break;
      default:
        // code block
    }

    // if(tab=='Beloved'){
    //   if(this.charity >=0){
    //     this.activeTab = tab;
    //   }else{
    //     this.openWarringPopup('#AB57A2', 'Please select a charity to continue');  
    //   }
    // }   
    // if(tab=='Charity' && this.charity >=0){
    //   this.activeTab = tab;
    // }
    // if(tab=='Gift'){
    //   if((this.data && this.data.alive && this.data.alive.index) >= 0  || (this.data && this.data.memory )>= 0 ){
    //     this.activeTab = tab;
    //   }else{
    //     this.openWarringPopup('#E6557F', 'Please select a your loved to continue');  
    //   }
    // }
    // if(tab=='Share'&& (this.data && this.data.amount >= 10 )){
    // if(tab=='Share'){
    //   if(((this.data && this.data.gift && this.data.gift.singleGift && this.data.gift.singleGift.index) >= 0 ) || 
    //   (this.data && this.data.gift && this.data.gift.giftBox && this.data.gift.giftBox.index) >= 0 ){
    //     this.activeTab = tab;
    //   }else{
    //     this.openWarringPopup('#0EA08F', 'Please select a cause to continue');
    //   }
    // }
    // if(tab == 'Baraqah'){
    //   if(this.data && this.data.shareForm){
    //     this.activeTab = tab;
    //   }else{
    //     this.openWarringPopup('#2D90CE', 'Please fill the form first to continue');
    //    // this.toastService.show("Please fill the form first", { classname: 'bg-danger text-light', delay: 5000 });    
    //   }
    // }
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  openWarringPopup(color:any,title:any){
    const openLocationRef =  this.modalService.open(ModalComponent)
    let data = {
      color,
      title
    }
  openLocationRef.componentInstance.data = data;
  }

  getCharity(i:any){
    this.data={
      ...this.data,
      charity:i
    }
    this.charity=i;
    this.setTabDataLocal();
    // console.log("getCharity",i);    
  }
  setCharity(charity:any){
    this.charity=charity
    // console.log("getCharity",charity);    
  }
  getAliveOnTag(alive:any){
    this.data={
      ...this.data,
      alive:alive
    }       
    this.setTabDataLocal();
  }
  getMemoryOnTab(memory:any){
    this.data={
      ...this.data,
      memory:memory
    }  
    this.setTabDataLocal();
    // console.log("memory",this.data);
  }
  getGiftTab(gift:any){
    // console.log("gift on tab",gift);  

    this.data={
      ...this.data,
      gift:gift
    } 
    this.setTabDataLocal();

    if(this.data && this.data.gift && this.data.gift.singleGift){
      this.data.gift.singleGift.map((data:any)=>{
        const sigle = {
          name: data.name,
          image: data.image,
          price: data.givenow,
          bgcolor: data.bgcolor,        
          quantity: data.quantity,
          index:data.index,
          total:1
        }
        if(this.data.cart){
        const index = this.data.cart.findIndex((e:any) => e.index === data.index);
          if (index === -1) {
            this.data.cart=_.concat(this.data.cart,sigle);               
          } else {
            this.data.cart[index].quantity = data.quantity;
          }
        }else{
        this.data.cart=_.concat(sigle);   
        }
       this.setTabDataLocal();

      })
      // const sigle = {
      //     name: this.data.gift.singleGift.name,
      //     image: this.data.gift.singleGift.image,
      //     price: this.data.gift.singleGift.givenow,
      //     bgcolor: this.data.gift.singleGift.bgcolor,        
      //     quantity:this.data?.gift?.singleGift?.quantity,
      //     total:1
      //   }
      //   this.data.cart=_.concat(sigle);   
    }
    if(this.data && this.data.gift && this.data.gift.giftBox){
        const data = {
          name: this.data.gift.giftBox.name,
          image: this.data.gift.giftBox.image,
          price: this.data.gift.giftBox.givenow,
          bgcolor: this.data.gift.giftBox.bgcolor,      
          type:this.data.gift.giftBox.type,  
          quantity:1,
          total:1
        }
        if(this.data && this.data.cart){
          this.data.cart = this.data.cart.filter((e:any) =>{
            if(e?.type === 'His' || e?.type === 'Hers'){
              return;
            }else{
              return e;
            }
          })
         this.data.cart=_.concat(this.data.cart,data);    
        }else{
         this.data.cart=_.concat(data);   
          
        }
       
       this.setTabDataLocal();
    
        // this.cart.push(data);
        // this.cart= this.cart.slice(1);
        // console.log(this.cart);       
    }
      

  }
  // getGiftAmount(amount:any){
  //   this.data.amount=amount;
  //   console.log("data",this.data);
  // }
  setTabDataLocal(){
    this.authService.setLocalStorage('tabData', this.data);
  }
  getOccasion(occasion:any){
    this.data={
      ...this.data,
      occasion
    }       
    this.setTabDataLocal();
  }
  getShareformData(shareForm:any){
    this.data={
      ...this.data,
      shareForm
    }       
    this.setTabDataLocal();
  }
}
