import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alive',
  templateUrl: './alive.component.html',
  styleUrls: ['./alive.component.scss']
})
export class AliveComponent implements OnInit {
  @Output() passAlive: EventEmitter<any> = new EventEmitter();
  @Input() passAliveTo:any;
  alive=-1;
  constructor() { }
  selectedItem=-1;
  content = [
    {
      name: "Mum",
      bgcolor: "#AB6CAC"
    },
    {
      name: "Dad",
      bgcolor: "#1CA08F"
    },
    {
      name: "Brother",
      bgcolor: "#2D90CC"
    },
    {
      name: "Sister",
      bgcolor: "#E7537F"
    },
    {
      name: "Grandparents",
      bgcolor: "#F69D1D"
    },
    {
      name: "Best Friend",
      bgcolor: "#AB6CAC"
    },
    {
      name: "Wife",
      bgcolor: "#1CA08F"
    },
    {
      name: "Husband",
      bgcolor: "#2D90CC"
    },
    {
      name: "Aunty",
      bgcolor: "#E7537F"
    },
    {
      name: "Uncle",
      bgcolor: "#F69D1D"
    },
    {
      name: "Son",
      bgcolor: "#1c5a80"
    },
    {
      name: "Daughter",
      bgcolor: "#8bc53f"
    }
  ]
  ngOnInit(): void {
    // console.log(this.passAliveTo);
    
    if(this.passAliveTo && this.passAliveTo.alive && this.passAliveTo.alive.index >=0 ){
      let item = this.passAliveTo.alive.index;
      this.alive=item;
    }
    this.selectedItem=this.alive;
      
  }
  onSelectedAlive(index:any,alive:any){
    // console.log(alive);
    
    this.selectedItem=index;
    alive.index=index;
    this.passAlive.emit(alive);
  }

}
