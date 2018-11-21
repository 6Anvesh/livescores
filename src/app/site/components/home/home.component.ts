import { Component, OnInit } from '@angular/core';
import { CricketService } from '../../services/cricket.service';


declare const $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cricketData:any;
  public matchesData:any;
  public selectedText:any;
  circketArr=['matches','cricket','cricketScore','matchCalendar','playerStats','playerFinder']
  constructor(public CricketService:CricketService) { 
    
  }

  ngOnInit(){}
 
  cricket(){
    this.selectedText='matches';
  console.log('text',this.selectedText);
this.CricketService.cricketapi(this.selectedText).subscribe((response)=>{
console.log('respo',response);
this.cricketData=response.data;
});

  }


}
