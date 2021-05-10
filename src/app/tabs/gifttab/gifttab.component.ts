import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-gifttab',
  templateUrl: './gifttab.component.html',
  styleUrls: ['./gifttab.component.scss']
})
export class GifttabComponent implements OnInit {
  // @ViewChild('giftModal') ;
  @Output() onTabClick: EventEmitter<any> = new EventEmitter();
  @Output() giftAmount: EventEmitter<any> = new EventEmitter();
  popupColor:any;
  @Output() passGift: EventEmitter<any> = new EventEmitter();
  @Output() passGiftToTab: EventEmitter<any> = new EventEmitter();

  constructor(private modalService:NgbModal) { }
  form!: FormGroup;
  closeResult = '';
  giftName:any;
  @Input() Gift:any;
  selectedItem=-1;
  selectedGiftContent:any;
  content = [
    {
      id: "most-needy",
      name: "Most Needy",
      image: "./assets/images/most-needy.png",
      givenow: "15.00",
      bgcolor: "#AB6CAD"
    },
    {
      id: "covid-19",
      name: "Covid-19",
      image: "./assets/images/covid-19.png",
      givenow: "15.00",
      bgcolor: "#E6557F"
    },
    {
      id: "water",
      name: "Water",
      image: "./assets/images/gift-water.png",
      givenow: "15.00",
      bgcolor: "#2D90CE"
    },
    {
      id: "food",
      name: "Food",
      image: "./assets/images/food.png",
      givenow: "15.00",
      bgcolor: "#0EA08F"
    },
    {
      id: "orphans",
      name: "Orphans",
      image: "./assets/images/orphans.png",
      givenow: "15.00",
      bgcolor: "#F79D11"
    },
    {
      id: "education",
      name: "Education",
      image: "./assets/images/education.png",
      givenow: "15.00",
      bgcolor: "#AB6CAD"
    }
  ]
  
  ngOnInit(): void {
    this.form = new FormGroup({   
      amount: new FormControl(10, [
          Validators.required,
          Validators.pattern(/^([1-9][0-9][0-9]*)$/)
        ]),  
    });
    }
  goToNextStep(){    
    if(this.Gift && this.Gift.singleGift.index >= 0){
      this.onTabClick.emit("Share");
    }else{
      const openLocationRef =  this.modalService.open(ModalComponent)
      let data = {
        color :'#0EA08F',
        title: 'Please select a cause to continue'
      }
    openLocationRef.componentInstance.data = data;
    }
  }
  goToBackStep(){
    this.onTabClick.emit("Beloved");
  }

  getSingleGift(singleGift:any){    
    if(singleGift){
      this.selectedGiftContent ={
        ... this.selectedGiftContent,
        singleGift:singleGift
      } 
    }
    this.passGiftToTab.emit(this.selectedGiftContent);
  
  }
  getGiftBox(giftBox:any){
    // console.log("getGiftBox",giftBox);
    
    if(giftBox){
      this.selectedGiftContent ={
        ...this.selectedGiftContent,
        giftBox:giftBox
      } 
    }
    this.passGiftToTab.emit(this.selectedGiftContent);
  }

  // onGiftTab(gift:any,content:any){
  //   this.selectedGiftContent=content;
  //   this.selectedGiftContent.index=gift;
  //   this.giftName=content.name;
  //   this.popupColor=content.bgcolor;
  //   console.log(this.popupColor);    
  //   this.selectedItem=gift;
  //   this.passGift.emit(this.selectedGiftContent);
  // }

  open(giftmodal:any) {
      this.modalService.open(giftmodal, {ariaLabelledBy: 'modal-basic-title',windowClass: 'gift-tab-content',centered: true}).result.then((result:any) => {  
      this.giftAmount.emit(this.form.get('amount')?.value);   
      this.closeResult = `Closed with: ${result}`;
    }, (reason:any) => {
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
  setAmount(amount:number){
    this.form.patchValue({amount:amount})
  }



}
