import { Component, OnInit } from '@angular/core';
import { CricketService } from '../../services/cricket.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { AuthService } from '../../services/auth.service';

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
 loading:Boolean;
 p:Number=1;
  authValue: any;
  constructor(private circketService: CricketService,
    private router: Router,
    private _auth: AuthService
  ) {

   }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
    this.authValue=this._auth.loggedIn();
  this.cricketServices('matchCalendar');
  }

  circketTeam() {

  }


  cricketPlayerFinder() {     //searching cricket Players
    this.p=1;
    this.loading=false
    this.circketService.playerFinder(this.searchText).subscribe(response => {
      this.searchData = response.data;
      this.selectedText=(this.searchData.length)?'':this.selectedText;
      this.loading=true
    });
  }
  cricketPlayerSelected(pid: any) {
    this.router.navigateByUrl('/circket/' + pid);
  }

  cricketServices(ev:any){
    this.p=1;
    this.selectedText=ev;
    this.loading=false
  this.circketService.cricketapi(this.selectedText).subscribe((response)=>{
  this.cricketServicesData=response.data?response.data:response.matches;
  this.loading=true
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
    logout(){
      this._auth.logoutUser();
        }

}
