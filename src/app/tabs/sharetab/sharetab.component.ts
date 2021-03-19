import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sharetab',
  templateUrl: './sharetab.component.html',
  styleUrls: ['./sharetab.component.scss']
})
export class SharetabComponent implements OnInit {
  @Output() onTabClick: EventEmitter<any> = new EventEmitter();

  constructor() { }
  selectedItem=-1;
  content = [
    {
      name: "Personalised e-Card",
      image: "./assets/images/personalised-e-card.png",
      price: "Free",
      bgcolor: "#ab6cad"
    },
    {
      name: "Postcard",
      image: "./assets/images/postcard.png",
      price: "£1.99",
      bgcolor: "#e6557f"
    },
    {
      name: "Box of Chocolates",
      image: "./assets/images/boxes-of-chocolates.png",
      price: "£4.99",
      bgcolor: "#2c8fcd"
    },
    {
      name: "Personalised Salah Mat",
      image: "./assets/images/personalised-salah-mat.png",
      price: "£14.95",
      bgcolor: "#0ea08f"
    },
    {
      name: "Dates",
      image: "./assets/images/dates.png",
      price: "£11.95",
      bgcolor: "#F79D11"
    },
    {
      name: "Zam Zam Water",
      image: "./assets/images/zam-zam-water.png",
      price: "£7.99",
      bgcolor: "#ab6cad"
    }
  ];
  dveliverySelectedItem=-1;
  dveliveryContent = [
    {
      name: "Royal Mail Special Delivery Guaranteed by 1pm®",
      text: "Guaranteed by 1pm next-day",
      price: "6.75"
    },
    {
      name: "Royal Mail Signed For® 1st Class",
      text: "Signature on delivery and next-day delivery aim",
      price: "2.25"
    },
    {
      name: "Royal Mail 1st Class",
      text: "Next-day delivery aim for letters and parcels",
      price: "2.25"
    },
    {
      name: "Royal Mail 2nd Class",
      text: "Delivery in two to three working days",
      price: "0.66"
    }
  ];
  selectedToday=-1;

  ngOnInit(): void {
  }

  goToNextStep(){
    this.onTabClick.emit("Baraqah");
  }
  goToBackStep(){
    this.onTabClick.emit("Gift");
  }

}
