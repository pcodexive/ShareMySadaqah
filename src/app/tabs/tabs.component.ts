import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  charity:any;
  @Output() data:any={};
  
  activeTab="Charity";
  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(tab:any) {
    // console.log("tab", this.data,this.charity);
   
    if(tab=='Beloved' && this.charity >=0){
      this.activeTab = tab;
    }   
    if(tab=='Charity' && this.charity >=0){
      this.activeTab = tab;
    }
    if(tab=='Gift' && ((this.data && this.data.alive && this.data.alive.index) >= 0  || (this.data && this.data.memory )>= 0 )){
      this.activeTab = tab;
    }
    if(tab=='Share'&& (this.data && this.data.amount >= 10 )){
      this.activeTab = tab;
    }
    if(tab == 'Baraqah'){
      this.activeTab = tab;
    }
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  getCharity(i:any){
    this.data.charity=i;
    this.charity=i;
    // console.log("getCharity",i);    
  }
  setCharity(charity:any){
    this.charity=charity
    // console.log("getCharity",charity);    
  }
  getAliveOnTag(alive:any){
    this.data.alive=alive;       
  }
  getMemoryOnTab(memory:any){
    this.data.memory=memory;   
    // console.log("memory",this.data);
  }
  getGiftTab(gift:any){
    console.log("gift",gift);
    this.data.gift=gift;    
  }
  getGiftAmount(amount:any){
    this.data.amount=amount;
    console.log("data",this.data);
  }
}
