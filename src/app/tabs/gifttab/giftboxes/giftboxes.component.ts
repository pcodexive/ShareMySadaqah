import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-giftboxes',
  templateUrl: './giftboxes.component.html'
})
export class GiftBoxesComponent implements AfterViewInit {
  @Output() passGiftBox: EventEmitter<any> = new EventEmitter();
  @Input() selectedGiftBox:any;
  constructor() { }

  ngAfterViewInit(): void {
  console.log("giftbox",this.selectedGiftBox);
  
  }
  giftBoxs(gift:any){
    this.passGiftBox.emit(gift);  
  }


}
