import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alive',
  templateUrl: './alive.component.html',
  styleUrls: ['./alive.component.scss']
})
export class AliveComponent implements OnInit {
  @Output() passAlive: EventEmitter<any> = new EventEmitter();
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
  }
  onSelectedAlive(alive:any){
    this.selectedItem=alive;
    this.passAlive.emit(alive);
  }

}
