import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-belovedtab',
  templateUrl: './belovedtab.component.html',
  styleUrls: ['./belovedtab.component.scss']
})
export class BelovedtabComponent implements OnInit {
  alive=-1;
  constructor() { }
  @Output() onTabClick: EventEmitter<any> = new EventEmitter();
  @Output() OnCharityPass: EventEmitter<any> = new EventEmitter();
  @Output() passAlive: EventEmitter<any> = new EventEmitter();
  @Input() charity=0;
  ngOnInit(): void {
    console.log(this.charity);
    
  }
  goToNextStep(){
    this.onTabClick.emit("Gift");
  }
  goToBackStep(){
    this.OnCharityPass.emit(this.charity);
    this.onTabClick.emit("Charity");
  }
  getAlive(alive:any){
    this.alive=alive;
    this.passAlive.emit(alive);
    console.log("alive",alive);
    
  }

}
