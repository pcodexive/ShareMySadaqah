import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-sharetab',
  templateUrl: './sharetab.component.html',
  styleUrls: ['./sharetab.component.scss']
})
export class SharetabComponent implements OnInit {
  @Output() onTabClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  goToNextStep(){
    this.onTabClick.emit("Baraqah");
  }
  goToBackStep(){
    this.onTabClick.emit("Gift");
  }
}
