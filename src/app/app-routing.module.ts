import { Routes } from "@angular/router";
import { HomeComponent } from "./site/components/home/home.component";
import { LoginComponent } from "./site/authentication/login/login.component";
import { SignupComponent } from "./site/authentication/signup/signup.component";
import { AuthGuardService } from "./site/services/auth-guard.service";
import { NoRouteComponent } from "./site/components/no-route/no-route.component";
import { CircketComponent } from "./site/components/circket/circket.component";
import { FootballComponent } from "./site/components/football/football.component";
import { BasketballComponent } from "./site/components/basketball/basketball.component";
import { DashboardComponent } from "./site/components/dashboard/dashboard.component";
import { PlayerStatsComponent } from "./site/components/player-stats/player-stats.component";


export const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "circket/:id",
    component: PlayerStatsComponent
  },
  {
    path:'circket',
    component:CircketComponent
  },
  {
    path:'football',
    component:FootballComponent
  },
  {
    path:'basketball',
    component:BasketballComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: "**",
    component: NoRouteComponent
  },

  // {
  //   path: "livescore-info",
  //   // canActivate: [AuthGuardService],
  //   component: LivescoreInfoComponent
  // },
  // {
  //   path: "player-info",
  //   component: PlayersInfoComponent
  //   // children:[{
  //   //   path:"player-info/:id",
  //   //   component:PlayerStatsComponent
  //   // }
  //   // ]
  // },

  // {
  //   path: "matches-info",
  //   component: MatchesInfoComponent
  // },
  // {
  //   path: "trophies-info",
  //   component: TrophiesInfoComponent
  // }
];
