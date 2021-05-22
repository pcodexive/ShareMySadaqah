import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: -30,
    nav: false,
    responsive: {
      0: {
        items: 1,
        
      }
    }    
  }

  content = [
    {
      id: "olive",
      title: "Olive Tree",
      subtitle: "A new way of giving a gift of sadaqah for your loved ones",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
      image: "./assets/images/give-banner-img.png",
      icon: "./assets/images/human-img.png"
    },
    {
      id: "tube",
      title: "Tube Well",
      subtitle: "Surprise them with a gift e-card in their name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
      image: "./assets/images/share-banner-img.png",
      icon: "./assets/images/share-icon.png"
    },
    {
      id: "gift",
      title: "Gift of Sight",
      subtitle: "Benefit now and in the akhirah",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
      image: "./assets/images/reward-banner-img.png",
      icon: "./assets/images/reward-icon.png"
    },
    {
      id: "food",
      title: "Food Pack",
      subtitle: "A new way of giving a gift of sadaqah for your loved ones",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
      image: "./assets/images/give-banner-img.png",
      icon: "./assets/images/give-icon.png"
    }
  ]

  imageContent = [
    {
      image:"./assets/images/share-icon.png",
      title:"Mother’s Day"
    },
    {
      image:"./assets/images/human-img.png",
      title:"Birthday"
    },
    {
      image: "./assets/images/share-icon.png",
      title:"Anniversary"
    },
    {
      image:"./assets/images/human-img.png",
      title:"New Baby"
    },
    {
      image:"./assets/images/give-icon.png",
      title:"Mother’s Day"
    },
    {
      image:"./assets/images/human-img.png",
      title:"Mother’s Day"
    }
  ]

  giftFor = [
 
    {
      id: "olive",
      image: "./assets/images/share-banner-img.png",
      title: "Olive Tree",
      l1: "“Paradise lies at the feet of your mother”",
      l2: "Prophet Muhammad (saw)",
      l3:"Order early for Mother’s Day,",
      l4: "Sunday May 9th",
      color:"#0ea08f",
      btntext:"Shop Mother’s Day Gifts"

    },
    {
      id: "olive",
      image: "./assets/images/share-banner-img.png",
      title: "Olive Tree",
      l1: "“Paradise lies at the feet of your mother”",
      l2: "Prophet Muhammad (saw)",
      l3:"Order early for Mother’s Day,",
      l4: "Sunday May 9th",
      color:"#f79d11",
      btntext:"Shop Mother’s Day Gifts"
    },
    {
      image: "./assets/images/reward-banner-img.png",
      id: "olive",
      title: "Olive Tree",
      l1: "“Paradise lies at the feet of your mother”",
      l2: "Prophet Muhammad (saw)",
      l3:"Order early for Mother’s Day,",
      l4: "Sunday May 9th"  ,
      color:"#AB57A2",
      btntext:"Shop Mother’s Day Gifts"
    },
    {
      id: "olive",
      image: "./assets/images/share-banner-img.png",
      title: "Olive Tree",
      l1: "“Paradise lies at the feet of your mother”",
      l2: "Prophet Muhammad (saw)",
      l3:"Order early for Mother’s Day,",
      l4: "Sunday May 9th",
      color:"#2D90CE",
      btntext:"Shop Mother’s Day Gifts"

    },
  ]

  ngOnInit(): void {

  }

}
