import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { CHARETYLIST } from 'src/app/shared/url';

@Component({
  selector: 'app-charitytab',
  templateUrl: './charitytab.component.html',
  styleUrls: ['./charitytab.component.scss']

})
export class CharityTabComponent implements OnInit {

  @Output() onTabClick: EventEmitter<any> = new EventEmitter();
  constructor(private api:ApiService) { }
  selectedItem=-1;
  content = [
    {
      name: "Human Appeal",
      image: "./assets/images/muslim-aid.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetuer.",
      bgcolor: "#7332AA"
    },
    {
      name: "GRT",
      image: "./assets/images/global-relief-trust.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetuer.",
      bgcolor: "#299AC3"
    },
    {
      name: "Skt welfare",
      image: "./assets/images/skt-walfare.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetuer.",
      bgcolor: "#E22929"
    },
    {
      name: "Syria Relief",
      image: "./assets/images/syria-relief.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetuer.",
      bgcolor: "#6A953D"
    },
    {
      name: "Islamic Relief",
      image: "./assets/images/islamic-relife.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetuer.",
      bgcolor: "#3C9CD9"
    },
    {
      name: "Islamic Help",
      image: "./assets/images/islamic-help.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetuer.",
      bgcolor: "#DF3144"
    }
  ]

  ngOnInit(): void {  
    this.charityList(6);
  }
  charityList(limit:any){
    this.api.get(CHARETYLIST+`?limit=${limit}`).subscribe(res=>{
       this.content = res.docs.map((item:any)=>{
        return {
          "name":item.name,
          "image":item.logo.white,
          "text":item.text,
          "bgcolor":item.theme.primary
        }            
      })
    },err =>{
      console.log("err");
    })
  }
  goToNextStep(){
    this.onTabClick.emit("Beloved");
  }
}
