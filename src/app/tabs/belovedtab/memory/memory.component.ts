import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from "lodash";

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {
  @Input() passmemoryTo=-1;
  @Output() passMemory: EventEmitter<any> = new EventEmitter();
  allLove=true;  
  addOtherflag=true;
  addOtherform=true;
  form!:FormGroup
  constructor() { }
  selectedItem=-1;

  content = [
    {
      name: "Prophet Muhammad",
      image: "./assets/images/memoryimg1.png",
      bgcolor: "#AB6CAC"
    },
    {
      name: "Abu Bakr (RA)",
      // image: "./assets/images/memoryimg.png",
      bgcolor: "#1CA08F"
    },
    {
      name: "Umar",
      // image: "./assets/images/memoryimg.png",
      bgcolor: "#2D90CC"
    },
    {
      name: "Uthman",
      // image: "./assets/images/memoryimg.png",
      bgcolor: "#E7537F"
    },
    {
      name: "Ali",
      // image: "./assets/images/memoryimg.png",
      bgcolor: "#F69D1D"
    },
    {
      name: "Sahaba",
      // image: "./assets/images/memoryimg.png",
      bgcolor: "#AB6CAC"
    },
    {
      name: "Grandparents",
      // image: "./assets/images/memoryimg.png",
      bgcolor: "#1CA08F"
    },
    {
      name: "Mum",
      // image: "./assets/images/memoryimg.png",
      bgcolor: "#2D90CC"
    },
    {
      name: "Dad",
      // image: "./assets/images/memoryimg.png",
      bgcolor: "#E7537F"
    },
    {
      name: "Wife",
      // image: "./assets/images/memoryimg.png",
      bgcolor: "#F69D1D"
    },
    {
      name: "Son",
      // image: "./assets/images/memoryimg.png",
      bgcolor: "#1c5a80"
    },
    {
      name: "Daughter",
      // image: "./assets/images/memoryimg.png",
      bgcolor: "#8bc53f"
    }
  ]

 
  contentAll= [
  {
    name: "BFF",
    // image: "./assets/images/memoryimg1.png",
    bgcolor: "#AB6CAC"
  },
  {
    name: "Work Colleague",
    // image: "./assets/images/memoryimg.png",
    bgcolor: "#1CA08F"
  },
  {
    name: "Nephew",
    // image: "./assets/images/memoryimg.png",
    bgcolor: "#2D90CC"
  },
  {
    name: "Neice",
    // image: "./assets/images/memoryimg.png",
    bgcolor: "#E7537F"
  },
  {
    name: "Grandson",
    // image: "./assets/images/memoryimg.png",
    bgcolor: "#F69D1D"
  },
  {
    name: "Grandchild",
    // image: "./assets/images/memoryimg.png",
    bgcolor: "#AB6CAC"
  }];



  ngOnInit(): void {
    this.selectedItem=this.passmemoryTo;
    this.form = new FormGroup({
         love: new FormControl(null, [
          Validators.required,
        ]),
     });
  }
  onSelectedMemory(alive:any){
    this.selectedItem=alive;
    this.passMemory.emit(alive);
  }
  loadMoreMemory(){
    this.content=_.concat(this.content, this.contentAll); 
    this.allLove=false;  
    this.addOtherflag=false;
  }
  addOther(){
    this.addOtherflag=true;
    this.addOtherform=false;
  }
  onAddOther(){
    this.content=_.concat(this.content,[  {
      name: this.form.get('love')?.value,
      // image: "./assets/images/memoryimg1.png",
      bgcolor: "#AB6CAC"
    }])
    // console.log("data",this.form);
    
  }
}
