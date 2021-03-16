import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baraqahaccordion',
  templateUrl: './baraqahaccordion.component.html',
  styleUrls: ['./baraqahaccordion.component.scss']
})
export class BaraqahaccordionComponent implements OnInit {

  constructor() { }
  toggle1: boolean = false;
  clicktoggle1(){
    this.toggle1 = !this.toggle1;       
  };
  toggle2: boolean = true;
  clicktoggle2(){
    this.toggle2 = !this.toggle2; 
  }
  toggle3: boolean = false;
  clicktoggle3(){
    this.toggle3 = !this.toggle3; 
  }
  toggle4: boolean = false;
  clicktoggle4(){
    this.toggle4 = !this.toggle4; 
  }
  toggle5: boolean = false;
  clicktoggle5(){
    this.toggle5 = !this.toggle5; 
  }
    
  ngOnInit(): void {
  }

}
