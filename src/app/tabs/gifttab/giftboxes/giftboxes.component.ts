import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-giftboxes',
  styleUrls: ['./giftboxes.component.scss'],
  templateUrl: './giftboxes.component.html',
})
export class GiftBoxesComponent {
  @Output() passGiftBox: EventEmitter<any> = new EventEmitter();
  @Input() selectedGiftBox:any;
  content = [
    {
      id: "small-gift-box",
      name: "Small Gift Box",
      image: "./assets/images/small-gift-icon.svg",
      givenow: "15.99",
      bgcolor: "#E6557F",
      boxbottomtext: "What's inside?",
      giftboxcontent: [
        {
          text: "Oud Royal"
        },
        {
          text: "Bath Bomb"
        },
        {
          text: "Miswak"
        }
      ]
    },
    {
      id: "large-gift-box",
      name: "Large Gift Box",
      image: "./assets/images/large-gift-icon.svg",
      givenow: "27.99",
      bgcolor: "#2D90CE",
      boxbottomtext: "What's inside?",
      giftboxcontent: [
        {
          text: "Oud Haramain"
        },
        {
          text: "Personalized Salah Mat"
        },
        {
          text: "Luxury Chocolates"
        },
        {
          text: "Bath Bomb"
        },
        {
          text: "Home Scents"
        }
      ]
    }
  ]  
  closeResult = '';
  constructor(private modalService: NgbModal) { }
  selectedItemHis=-1;
  selectedItemHers=-1;
  // giftBoxs(gift:any){
  //   this.passGiftBox.emit(gift);  
  // }
  open(content: any,gift:any,index:any,type:any) {
    gift={
      ...gift,
      index,
      type
    }
    this.passGiftBox.emit(gift);  

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit(): void {
    if(this.selectedGiftBox && this.selectedGiftBox.giftBox && this.selectedGiftBox.giftBox.index >= 0 ){
      if(this.selectedGiftBox.giftBox.type === 'His'){
        this.selectedItemHis=this.selectedGiftBox.giftBox.index;    
        this.selectedItemHers=-1;
      }else{
        this.selectedItemHers=this.selectedGiftBox.giftBox.index;  
        this.selectedItemHis=-1;
      }
    }
  }
  setGiftBox(type:any){
    if(this.selectedGiftBox && this.selectedGiftBox.giftBox && this.selectedGiftBox.giftBox.index >= 0 ){
      if(this.selectedGiftBox.giftBox.type === 'His'){
        this.selectedItemHis=this.selectedGiftBox.giftBox.index;    
        this.selectedItemHers=-1;
      }else{  
        this.selectedItemHers=this.selectedGiftBox.giftBox.index;  
        this.selectedItemHis=-1;
      }
    }
  }



}
