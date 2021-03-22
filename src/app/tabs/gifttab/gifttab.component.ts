import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-gifttab',
  templateUrl: './gifttab.component.html',
  styleUrls: ['./gifttab.component.scss']
})
export class GifttabComponent implements OnInit {
  // @ViewChild('giftModal') ;
  @Output() onTabClick: EventEmitter<any> = new EventEmitter();
  @Output() giftAmount: EventEmitter<any> = new EventEmitter();
  @Output() passGift: EventEmitter<any> = new EventEmitter();
  constructor(private modalService:NgbModal,private fb:FormBuilder) { }
  form!: FormGroup;
  closeResult = '';
  giftName:any;
  @Input() gift:any;
  selectedItem=-1;
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
    this.selectedItem=this.gift;
    this.form = this.fb.group({
      amount:[10,[Validators.required]],
    })
    
  }
  goToNextStep(){
    if(this.selectedItem >= 0)
    this.onTabClick.emit("Share");
  }
  goToBackStep(){
    this.onTabClick.emit("Beloved");
  }
  onGiftTab(gift:any,content:any){
    console.log("data",content);    
    this.giftName=content.name;
    this.selectedItem=gift;
    this.passGift.emit(this.selectedItem);
  }

  open(giftmodal:any) {
    this.modalService.open(giftmodal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result:any) => {  
      console.log("this.form.get('amount')",this.form.get('amount')?.value);
       
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
  submitAmount(reason:any){
    // this.activeModal.close();
    
  }
 


}
