import { Routes } from "@angular/router";
import { HomeComponent } from "./site/components/home/home.component";
import { LoginComponent } from "./site/authentication/login/login.component";
import { SignupComponent } from "./site/authentication/signup/signup.component";
import { LivescoreInfoComponent } from "./site/components/livescore-info/livescore-info.component";
import { AuthGuardService } from "./site/services/auth-guard.service";

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
  }
];
