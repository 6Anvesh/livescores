import { Component, OnInit, Input } from '@angular/core';
import { CricketService } from '../../../services/cricket.service';
import { ActivatedRoute, ParamMap } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {
  player_id: string;
  playerStats:any;
  playerBatting: any;
  playerBowling: any;


  constructor(private circketService:CricketService, private route: ActivatedRoute,) {
    this.route.paramMap.subscribe((params: ParamMap) => {
       this.player_id = params.get('id');
  });
    this.circketService.playerStats(Number(this.player_id)).subscribe(response => {
      this.playerStats = response;
      this.playerBatting=response.data.batting;
      this.playerBowling=response.data.bowling;
      console.log("playwe stats", response,this.playerStats ,this.playerBowling,this.playerBatting);
    });
   }

  ngOnInit() {


  }

  
}
