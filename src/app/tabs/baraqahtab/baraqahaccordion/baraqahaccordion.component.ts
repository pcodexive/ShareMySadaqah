import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baraqahaccordion',
  templateUrl: './baraqahaccordion.component.html',
  styleUrls: ['./baraqahaccordion.component.scss']
})
export class BaraqahaccordionComponent implements OnInit {

  constructor() { }
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
  }

}
