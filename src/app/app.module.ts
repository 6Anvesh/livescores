import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./site/components/home/home.component";
import { CricketService } from "./site/services/cricket.service";
import { HttpModule } from "../../node_modules/@angular/http";
import { SignupComponent } from "./site/authentication/signup/signup.component";
import { LoginComponent } from "./site/authentication/login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { AuthService } from "./site/services/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { routes } from "./app-routing.module";
import { FootballService } from "./site/services/football.service";
import { AuthGuardService } from "./site/services/auth-guard.service";
import { BasketballService } from "./site/services/basketball.service";
import { NoRouteComponent } from './site/components/no-route/no-route.component';
import { CircketComponent } from './site/components/circket/circket.component';
import { FootballComponent } from './site/components/football/football.component';
import { BasketballComponent } from './site/components/basketball/basketball.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DashboardComponent } from "./site/components/dashboard/dashboard.component";
import { PlayerStatsComponent } from "./site/components/player-stats/player-stats.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    PlayerStatsComponent,
    NoRouteComponent,
    CircketComponent,
    FootballComponent,
    BasketballComponent,
   DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CricketService,BasketballService , AuthService, FootballService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
