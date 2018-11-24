import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '../../../../../node_modules/@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterViewInit {

  constructor(public _auth:AuthService,private router:Router) { }

  ngOnInit() {
    
  }
ngAfterViewInit(){
  this.router.navigate(['home']);
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

