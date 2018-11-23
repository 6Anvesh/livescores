import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./site/components/home/home.component";
import { PlayersInfoComponent } from "./site/components/players-info/players-info.component";
import { LivescoreInfoComponent } from "./site/components/livescore-info/livescore-info.component";
import { TrophiesInfoComponent } from "./site/components/trophies-info/trophies-info.component";
import { MatchesInfoComponent } from "./site/components/matches-info/matches-info.component";
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
import { PlayerStatsComponent } from './site/components/players-info/player-stats/player-stats.component';
import { BasketballService } from "./site/services/basketball.service";
import { NoRouteComponent } from './site/components/no-route/no-route.component';
import { CircketComponent } from './site/components/circket/circket.component';
import { FootballComponent } from './site/components/football/football.component';
import { BasketballComponent } from './site/components/basketball/basketball.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersInfoComponent,
    LivescoreInfoComponent,
    TrophiesInfoComponent,
    MatchesInfoComponent,
    SignupComponent,
    LoginComponent,
    PlayerStatsComponent,
    NoRouteComponent,
    CircketComponent,
    FootballComponent,
    BasketballComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CricketService,BasketballService , AuthService, FootballService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
