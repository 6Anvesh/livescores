import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterViewInit {
  tweetData:any=[];
  public searchData:any=[];
  public searchText:any='';
  loading:Boolean=false;
  constructor(public _auth: AuthService, private _userService: UserService, private router: Router) {
    console.log("dash", this._userService.userData);
    this._auth.alltweets(this._userService.userData).subscribe((res) => {
      console.log(res)
      this.tweetData = res.tweets;
    })
  }

  ngOnInit() {
    
  }
ngAfterViewInit(){
  // this.router.navigate(['home']);
}

searchClick(){
console.log(this.searchText);
if(this.searchText&&this.searchText[0]!="#"){
this._auth.searchtweets(this.searchText).subscribe((res) => {
  console.log(res);
  this.searchData = res.tweets;
  (res.success)?this.loading=true:'';
   this.searchData.length?this.tweetData=[]:'';
})
}else{
this._auth.searchHashtag(this.searchText.replace(/\#/,"")).subscribe((res) => {
  console.log(res);
  this.searchData = res.tweets;
  (res.success)?this.loading=true:'';
   this.searchData.length?this.tweetData=[]:'';
})}


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

logout(){
  this._auth.logoutUser();
}
}

