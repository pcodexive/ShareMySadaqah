import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { CHARETYLIST } from 'src/app/shared/url';
import { startWith } from 'rxjs/operators';
@Component({
  selector: 'app-charitytab',
  templateUrl: './charitytab.component.html',
  styleUrls: ['./charitytab.component.scss']

})
export class CharityTabComponent implements OnInit {
  filtercontent:any;
  LoadMoreCharities:boolean=false;
  @Output() onTabClick: EventEmitter<any> = new EventEmitter();
  constructor(private api:ApiService) { }
  charitieFilter(e:any){
    console.log(e.value);
    this.filtercontent = this._filterCharities(e.value)
  }
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
  private _filterCharities(value: string) {
    const filterValue = value.toLowerCase();
    if(filterValue){
      return this.content.filter(charity => charity.name.toLowerCase().indexOf(filterValue) === 0);
    }else{
      return this.content;
    }
  }

  ngOnInit(): void {  
    this.charityList(6);
  }
  charityList(limit:any){
    if(limit==100){
      this.LoadMoreCharities=true;
    }
    this.api.get(CHARETYLIST+`?limit=${limit}`).subscribe(res=>{
       this.content = res.docs.map((item:any)=>{
        return {
          "name":item.name,
          "image":item.logo.white,
          "text":item.text,
          "bgcolor":item.theme.primary
        }            
      })
      this.filtercontent=this.content;
    },err =>{
      console.log("err");
    })
  }
  goToNextStep(){
    this.onTabClick.emit("Beloved");
  }
}
