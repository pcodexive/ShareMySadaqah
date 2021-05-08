import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import * as _ from "lodash";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  charity:any;
  @Output() data:any={};
  
  activeTab="Charity";
  constructor(private authService: AuthService) { }

  ngOnInit(): void {    
    this.data=this.authService.getLocalStorage('tabData');
    if(this.data && this.data.charity){
      this.charity=this.data.charity      
    }

  }

  setActiveTab(tab:any) {
    // console.log("tab", this.data,this.charity);
    // console.log("data",this.data);
    if(tab=='Beloved' && this.charity >=0){
      this.activeTab = tab;
    }   
    if(tab=='Charity' && this.charity >=0){
      this.activeTab = tab;
    }
    if(tab=='Gift' && ((this.data && this.data.alive && this.data.alive.index) >= 0  || (this.data && this.data.memory )>= 0 )){
      this.activeTab = tab;
    }
    // if(tab=='Share'&& (this.data && this.data.amount >= 10 )){
    if(tab=='Share' &&
     ((this.data && this.data.gift && this.data.gift.singleGift && this.data.gift.singleGift.index) >= 0 ) || 
     (this.data && this.data.gift && this.data.gift.giftBox && this.data.gift.giftBox.index) >= 0 ){
      this.activeTab = tab;
    }
    if(tab == 'Baraqah' && (this.data && this.data.shareForm)){
      this.activeTab = tab;
    }
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
    this.data={
      ...this.data,
      gift:gift
    } 
    // console.log("gift on tab",gift);
    this.setTabDataLocal();

    if(this.data && this.data.gift.singleGift){
       
      const sigle = {
          name: this.data.gift.singleGift.name,
          image: this.data.gift.singleGift.image,
          price: this.data.gift.singleGift.givenow,
          bgcolor: this.data.gift.singleGift.bgcolor,        
          quantity:this.data?.gift?.singleGift?.quantity,
          total:1
        }
        this.data.cart=_.concat(sigle);   
    }
    if(this.data && this.data.gift.giftBox){
        const data = {
          name: this.data.gift.giftBox.name,
          image: this.data.gift.giftBox.image,
          price: this.data.gift.giftBox.givenow,
          bgcolor: this.data.gift.giftBox.bgcolor,      
          type:this.data.gift.giftBox.type,  
          quantity:1,
          total:1
        }
        this.data.cart=_.concat(this.data.cart,data);     
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
