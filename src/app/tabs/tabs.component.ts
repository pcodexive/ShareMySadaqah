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
  }

  setActiveTab(tab:any) {
    this.activeTab = tab;
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
    this.data.aliv=alive;
    console.log("avlit data",this.data);
    
  }

}
