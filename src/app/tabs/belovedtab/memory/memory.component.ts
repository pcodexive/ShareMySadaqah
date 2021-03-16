import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {

  constructor() { }
  selectedItem=-1;

  content = [
    {
      name: "Prophet Muhammad",
      image: "./assets/images/memoryimg.png",
      bgcolor: "#AB6CAC"
    },
    {
      name: "Abu Bakr (RA)",
      image: "./assets/images/memoryimg.png",
      bgcolor: "#1CA08F"
    },
    {
      name: "Umar",
      image: "./assets/images/memoryimg.png",
      bgcolor: "#2D90CC"
    },
    {
      name: "Uthman",
      image: "./assets/images/memoryimg.png",
      bgcolor: "#E7537F"
    },
    {
      name: "Ali",
      image: "./assets/images/memoryimg.png",
      bgcolor: "#F69D1D"
    },
    {
      name: "Sahaba",
      image: "./assets/images/memoryimg.png",
      bgcolor: "#AB6CAC"
    },
    {
      name: "Grandparents",
      image: "./assets/images/memoryimg.png",
      bgcolor: "#1CA08F"
    },
    {
      name: "Mum",
      image: "./assets/images/memoryimg.png",
      bgcolor: "#2D90CC"
    },
    {
      name: "Dad",
      image: "./assets/images/memoryimg.png",
      bgcolor: "#E7537F"
    },
    {
      name: "Wife",
      image: "./assets/images/memoryimg.png",
      bgcolor: "#F69D1D"
    },
    {
      name: "Son",
      image: "./assets/images/memoryimg.png",
      bgcolor: "#1c5a80"
    },
    {
      name: "Daughter",
      image: "./assets/images/memoryimg.png",
      bgcolor: "#8bc53f"
    }
  ]

  ngOnInit(): void {
  }

}
