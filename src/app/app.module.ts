import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './site/components/home/home.component';
import { PlayersInfoComponent } from './site/components/players-info/players-info.component';
import { LivescoreInfoComponent } from './site/components/livescore-info/livescore-info.component';
import { TrophiesInfoComponent } from './site/components/trophies-info/trophies-info.component';
import { MatchesInfoComponent } from './site/components/matches-info/matches-info.component';
import { CricketService } from './site/services/cricket.service';
import { HttpModule } from '../../node_modules/@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersInfoComponent,
    LivescoreInfoComponent,
    TrophiesInfoComponent,
    MatchesInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule

  ],
  providers: [CricketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
