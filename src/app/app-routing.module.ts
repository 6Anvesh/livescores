import { Routes } from "@angular/router";
import { HomeComponent } from "./site/components/home/home.component";
import { LoginComponent } from "./site/authentication/login/login.component";
import { SignupComponent } from "./site/authentication/signup/signup.component";
import { LivescoreInfoComponent } from "./site/components/livescore-info/livescore-info.component";
import { AuthGuardService } from "./site/services/auth-guard.service";
import { PlayersInfoComponent } from "./site/components/players-info/players-info.component";

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
    path: "livescore_football",
    canActivate: [AuthGuardService],
    component: LivescoreInfoComponent
  },
  {
    path:'player-info',
    component:PlayersInfoComponent
  }
];
