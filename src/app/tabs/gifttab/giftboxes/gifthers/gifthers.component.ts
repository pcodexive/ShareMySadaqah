import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gifthers',
  templateUrl: './gifthers.component.html',
  // styleUrls: ['./gifthers.component.scss']
})
export class GiftHersComponent implements OnInit {
  @Output() passGiftThers:EventEmitter<any> =new EventEmitter();
  @Input() selectedGiftBoxThers:any;
  closeResult = '';
  constructor(private modalService: NgbModal) { }
  selectedItem=-1;
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

  open(content: any,gift:any,index:any) {
    gift={
      ...gift,
      index:index,
      type:'Hers'
    }
    this.passGiftThers.emit(gift);
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
    // console.log("selectedGiftBoxThers",this.selectedGiftBoxThers);
    
    if(this.selectedGiftBoxThers && this.selectedGiftBoxThers.giftBox && this.selectedGiftBoxThers.giftBox.index ){
      {
        if(this.selectedGiftBoxThers.giftBox.type === 'Hers')
        this.selectedItem=this.selectedGiftBoxThers.giftBox.index; 
      }
    }
  }

}
