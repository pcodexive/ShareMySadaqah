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
      id: "give",
      title: "Give",
      subtitle: "A new way of giving a gift of sadaqah for your loved ones",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
      image: "./assets/images/give-banner-img.png",
      icon: "./assets/images/give-icon.png"
    },
    {
      id: "share",
      title: "Share",
      subtitle: "Surprise them with a gift e-card in their name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
      image: "./assets/images/share-banner-img.png",
      icon: "./assets/images/share-icon.png"
    },
    {
      id: "reward",
      title: "Reward",
      subtitle: "Benefit now and in the akhirah",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
      image: "./assets/images/reward-banner-img.png",
      icon: "./assets/images/reward-icon.png"
    }
  ]
  ngOnInit(): void {

  }

}
