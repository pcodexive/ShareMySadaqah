import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-belovedtab',
  templateUrl: './belovedtab.component.html',
  styleUrls: ['./belovedtab.component.scss']
})
export class BelovedtabComponent implements OnInit {
  @Input() passAlive:any
  @Input() passMemory=-1;

  alive=-1;
  constructor() { 
    console.log("alive=======",this.passAlive);
  }
  
  @Output() onTabClick: EventEmitter<any> = new EventEmitter();
  @Output() OnCharityPass: EventEmitter<any> = new EventEmitter();
  @Output() passAliveOnTab: EventEmitter<any> = new EventEmitter();
  @Output() passMemoryOnTab: EventEmitter<any> = new EventEmitter();
  @Input() charity=0;
  ngOnInit(): void {
    console.log("alive2222=======",this.passAlive);
  }
  goToNextStep(){    
  if((this.passAlive && this.passAlive.alive && this.passAlive.alive.index >= 0) || this.passMemory >=0 )
    this.onTabClick.emit("Gift");
  }
  goToBackStep(){
    this.OnCharityPass.emit(this.charity);
    this.onTabClick.emit("Charity");
  }
  getAlive(alive:any){    
    this.alive=alive.index;
    this.passAliveOnTab.emit(alive);    
  }
  getMemory(memory:any){
    this.passMemory=memory;
    this.passMemoryOnTab.emit(memory);    
  }

}
