import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  @Input() public data : any;

  ngOnInit(): void {
    // console.log(this.data);
    
  }

  closePopup(value:boolean) {
    this.activeModal.dismiss(value);
  }

}
