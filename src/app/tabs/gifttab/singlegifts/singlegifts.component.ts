import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-singlegifts',
  templateUrl: './singlegifts.component.html',
  styleUrls: ['./singlegifts.component.scss']
})
export class SingleGiftsComponent implements OnInit {
  @Output() passSingleGift: EventEmitter<any> = new EventEmitter();
  @Input() selectedsingleGift:any;
  singleGift={};
  closeResult = '';
  constructor(private modalService: NgbModal) { }
  selectedItem=[-1];
  form!: FormGroup;
  
  // donationItem=-1;
  content = [
    {
      id: "postcard",
      name: "Postcard",
      image: "./assets/images/postcard.png",
      givenow: "1.99",
      bgcolor: "#E6557F"
    },
    {
      id: "boxes-chocolates",
      name: "Boxes of Chocolates",
      image: "./assets/images/boxes-of-chocolates.png",
      givenow: "4.99",
      bgcolor: "#2D90CE"
    },
    {
      id: "personalised",
      name: "Personalised Salah Mat",
      image: "./assets/images/personalised-salah-mat.png",
      givenow: "14.95",
      bgcolor: "#0EA08F"
    },
    {
      id: "dates",
      name: "Dates",
      image: "./assets/images/dates.png",
      givenow: "11.95",
      bgcolor: "#F79D11"
    },
    {
      id: "zam-zam-water",
      name: "Zam Zam Water",
      image: "./assets/images/zam-zam-water.png",
      givenow: "7.99",
      bgcolor: "#AB6CAD"
    },
    {
      id: "mug",
      name: "Mug",
      image: "./assets/images/mug.svg",
      givenow: "4.99",
      bgcolor: "#E6557F"
    }
  ]
  singleGiftSelect(i:any){
    this.selectedItem.push(i);
  }



  open(content: any,singleGift:any,index:any) {  
    if(this.selectedsingleGift && this.selectedsingleGift.singleGift){
      let gift = this.selectedsingleGift.singleGift.findIndex((obj:any) => obj.index == index);
      if(gift === -1){
        this.form.patchValue({quantity:1})
      }else{
        this.form.setValue({quantity:this.selectedsingleGift.singleGift[gift].quantity})
      }
  }
  this.singleGift=singleGift;
    this.singleGift ={
      ...this.singleGift,
      index:index
    }
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {   
 
    this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.OnQuantityBlur();
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
  OnQuantityBlur(){
    this.singleGift = {
      ...this.singleGift,
      quantity:this.form.get('quantity')?.value
    }
    // console.log(this.singleGift); 
    
    this.passSingleGift.emit(this.singleGift); 
  }
  ngOnInit(): void {
    this.form = new FormGroup({   
      quantity: new FormControl(1, [
          Validators.required,
          Validators.pattern(/^([1-9][0-9]*)$/)
        ]),  
    });
    if(this.selectedsingleGift && this.selectedsingleGift.singleGift && this.selectedsingleGift.singleGift.length > 0){  
      if(this.selectedsingleGift.singleGift){
        this.selectedsingleGift.singleGift.map((data:any)=>{
        this.selectedItem.push(data.index);    
      })
    }
  }else{
    // console.log(this.selectedsingleGift);
    if(this.selectedsingleGift  && this.selectedsingleGift.index){
      // console.log(this.selectedsingleGift.index);      
      this.selectedItem.push(this.selectedsingleGift.index);    
    }
  }
   
    
   
  //   if(this.selectedsingleGift && this.selectedsingleGift.singleGift){
  //     this.selectedItem = this.selectedsingleGift.singleGift.index;
  //     // this.form.setValue({quantity:this.selectedsingleGift.singleGift.quantity})
  //     // this.selectedItem = this.content.findIndex(obj => obj.id==this.selectedsingleGift.id);

  //   }
  // }

}
}