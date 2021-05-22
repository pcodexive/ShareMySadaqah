import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { CHARETYLIST } from 'src/app/shared/url';

import * as _ from "lodash";
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-charitytab',
  templateUrl: './charitytab.component.html',
  styleUrls: ['./charitytab.component.scss']

})
export class CharityTabComponent implements OnInit {
  filtercontent:any;
  LoadMoreCharities:boolean=false;
  limit:number=10;
  pageSize:number=1;
  totalPage:number=1;
  spinner:boolean=false;
  @Input() selectedItem=-1;
  @Output() onTabClick: EventEmitter<any> = new EventEmitter();
  @Output() setCharity: EventEmitter<any> = new EventEmitter();
  constructor(private api:ApiService,private modalService: NgbModal,private authService: AuthService) { }
  charitieFilter(e:any){
    // console.log(e.value);
    this.filtercontent = this._filterCharities(e.value)
  }

  content:any=[];
  contentarr:any=[];
  private _filterCharities(value: string) {
    const filterValue = value.toLowerCase();
    if(filterValue){
      return this.content.filter((charity:any) => charity.name.toLowerCase().indexOf(filterValue) === 0);
    }else{
      return this.content;
    }
  }

  ngOnInit(): void {  
    this.filtercontent=this.authService.getLocalStorage('charity');
    this.content =this.filtercontent;
    if(!this.filtercontent){
      this.authService.setToken('pageSize', this.pageSize);
      this.authService.setToken('totalPage', this.totalPage);
      this.charityList();
    }

  }
  onCharitieSelecte(i:any){
    this.setCharity.emit(i);
    this.selectedItem=i;
  }
  charityList(){
    this.spinner=true;
    this.pageSize=this.authService.getLocalStorage('pageSize');
    this.totalPage=this.authService.getLocalStorage('totalPage');
    console.log(this.totalPage);
    
    // https://nestdev.herokuapp.com/v1/charity?limit=100&page=1&filter_by=&sort=asc&column=&is_featured=0&app=2
    if(this.pageSize  == this.totalPage + 1){
    this.spinner=false;     
      return;  
     }
    this.api.get(CHARETYLIST+`?limit=${this.limit}&page=${this.pageSize}&filter_by=`).subscribe(res=>{
      if(!this.contentarr){
        this.contentarr=[];
      }
       this.pageSize=this.pageSize +1;  
       this.totalPage = res.pages;
       this.authService.setToken('pageSize',  this.pageSize);
       this.authService.setToken('totalPage', this.totalPage);
       this.contentarr = res.docs.map((item:any)=>{
        return {
          "name":item.name ? item.name :'',
          "image":item.logo && item.logo.white ? item.logo.white : '',
          "text":item.text ? item.text : '',
          "bgcolor":item.theme && item.theme.primary ? item.theme.primary : ''
        }            
      })
      if(this.filtercontent){
        this.content=_.concat(this.filtercontent,this.contentarr)       
      }else{
        this.content = this.contentarr;
      }
      this.filtercontent=this.content;
      this.authService.setLocalStorage('charity', this.filtercontent);

      this.spinner=false;
    },err =>{
      // console.log("err");
    })
  }
  goToNextStep(){
    if(this.selectedItem >= 0){     
      this.onTabClick.emit("Beloved");
    }else{
      const openLocationRef =  this.modalService.open(ModalComponent)
      let data = {
        color :'#AB57A2',
        title: 'Please select a charity to continue'
      }
    openLocationRef.componentInstance.data = data;

      }
  }
}
