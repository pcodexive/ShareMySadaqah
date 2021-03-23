import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  charity:any;
  data:any={};
  activeTab="Charity";
  constructor() { }

  ngOnInit(): void {
    console.log("data",this.data);
    
  }

  setActiveTab(tab:any) {
    this.activeTab = tab;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  getCharity(i:any){
    this.data.charity=i;
    this.charity=i;
    console.log("getCharity",i);    
  }
  setCharity(charity:any){
    this.charity=charity
    console.log("getCharity",charity);    
  }
  getAliveOnTag(alive:any){
    this.data.alive=alive;   
    console.log("alive",this.data);
    
  }
  getMemoryOnTab(memory:any){
    this.data.memory=memory;   
    console.log("memory",this.data);
  }
  getGiftTab(gift:any){
    this.data.gift=gift;
    console.log("gift");
    
  }
  getGiftAmount(amount:any){
    this.data.amount=amount;
    console.log("data",this.data);
    
  }
}
