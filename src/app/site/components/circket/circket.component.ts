import { Component, OnInit } from '@angular/core';
import { CricketService } from '../../services/cricket.service';
import { Router } from '../../../../../node_modules/@angular/router';

declare var $;
@Component({
  selector: 'app-circket',
  templateUrl: './circket.component.html',
  styleUrls: ['./circket.component.css']
})
export class CircketComponent implements OnInit {

 public playerDetails:any;
 public searchData:any;
 public searchText:any='';
 public selectedText:any='';
 public cricketServicesData:any;
  constructor(public circketService: CricketService,
    public router: Router) { }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
  }

  circketTeam() {

  }


  cricketPlayerFinder() {     //searching cricket Players
    console.log("search cricket", this.searchText);
    this.circketService.playerFinder(this.searchText).subscribe(response => {
      console.log("circket finder", response);
      this.searchData = response.data;
    });
  }
  cricketPlayerSelected(pid: any) {
    this.router.navigateByUrl('/circket/' + pid);
  }

  cricketServices(ev:any){
    this.selectedText=ev;
    console.log('text',this.selectedText);
  this.circketService.cricketapi(this.selectedText).subscribe((response)=>{
  this.cricketServicesData=response.data?response.data:response.matches;
  console.log('cricket',this.cricketServicesData);
  });
    }

    cricketClicked(){
      this.router.navigateByUrl('/circket');
    }
  
    basketballClicked(){
      this.router.navigateByUrl('/basketball');
    }
  
    footballClicked(){
      this.router.navigateByUrl('/football');
    }

    homeClicked(){
      this.router.navigateByUrl('/home');
    }

}
