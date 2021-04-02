import { Component, OnInit } from '@angular/core';
import { Ships } from 'src/app/model/ships';
import { ShipsService } from 'src/app/services/ships/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.page.html',
  styleUrls: ['./ships.page.scss'],
})
export class ShipsPage implements OnInit {

  allShips: Ships[] = [];

  constructor(private shipService: ShipsService) { }

  ngOnInit() {
    this.shipService.loadShips().then((ship: Ships[]) => {
      this.allShips = ship;
    }, error => {
      this.allShips = [];
    });
  }

}
