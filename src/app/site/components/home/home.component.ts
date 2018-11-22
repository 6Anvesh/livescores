import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CricketService } from '../../services/cricket.service';
import { Router } from '../../../../../node_modules/@angular/router';


declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output()
  playerData = new EventEmitter<any>();

  public cricketData:any;
  public matchesData:any;
  public selectedText:any;
  circketArr=['matches','cricket','matchCalendar'];
  playerDetails: any;

  constructor(public CricketService:CricketService,public router:Router) { 
    
  }

  ngOnInit(){}
 
  cricket(){
  console.log('text',this.selectedText);
this.CricketService.cricketapi(this.selectedText).subscribe((response)=>{
this.cricketData=response.data?response.data:response.matches;
console.log('cricket',this.cricketData);
});
  }

  playerInfo(){
    this.router.navigateByUrl('/player-info');
  }


}
