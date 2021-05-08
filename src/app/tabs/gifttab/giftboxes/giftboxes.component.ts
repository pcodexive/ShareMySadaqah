import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-giftboxes',
  templateUrl: './giftboxes.component.html'
})
export class GiftBoxesComponent {
  @Output() passGiftBox: EventEmitter<any> = new EventEmitter();
  @Input() selectedGiftBox:any;
  constructor() { }

  giftBoxs(gift:any){
    this.passGiftBox.emit(gift);  
  }


}
