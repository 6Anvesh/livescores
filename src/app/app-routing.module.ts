import { Routes } from "@angular/router";
import { HomeComponent } from "./site/components/home/home.component";
import { LoginComponent } from "./site/authentication/login/login.component";
import { SignupComponent } from "./site/authentication/signup/signup.component";
import { LivescoreInfoComponent } from "./site/components/livescore-info/livescore-info.component";
import { AuthGuardService } from "./site/services/auth-guard.service";
import { PlayersInfoComponent } from "./site/components/players-info/players-info.component";
import { MatchesInfoComponent } from "./site/components/matches-info/matches-info.component";
import { TrophiesInfoComponent } from "./site/components/trophies-info/trophies-info.component";

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
    path: "livescore-info",
    // canActivate: [AuthGuardService],
    component: LivescoreInfoComponent
  },
  {
    path: "player-info",
    component: PlayersInfoComponent
  },
  {
    path: "matches-info",
    component: MatchesInfoComponent
  },
  {
    path: "trophies-info",
    component: TrophiesInfoComponent
  }
];