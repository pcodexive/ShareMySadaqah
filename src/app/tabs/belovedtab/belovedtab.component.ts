import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-belovedtab',
  templateUrl: './belovedtab.component.html',
  styleUrls: ['./belovedtab.component.scss']
})
export class BelovedtabComponent implements OnInit {

  constructor() { }
  @Output() onTabClick: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
  }
  goToNextStep(){
    this.onTabClick.emit("Gift");
  }
  goToBackStep(){
    this.onTabClick.emit("Charity");
  }


}
