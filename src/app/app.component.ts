import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HomePage } from './home/home.page';
import { InfoPage } from './pages/info/info.page';
import { LivemapPage } from './pages/livemap/livemap.page';
import { ShipsPage } from './pages/ships/ships.page';
import { ViewpointsPage } from './pages/viewpoints/viewpoints.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  //public pages: Array<{title: string, route: string}>;

  constructor(private menu: MenuController) {
    // this.pages = [
    //   { title: "Home", route: "home"},
    //   { title: "Ships", route: "ships"},
    //   { title: "LiveMap", route: "livemap"},
    //   { title: "Viewpoints", route: "viewpoints"},
    //   { title: "Information", route: "info"},
    //   { title: "Todos", route: "todo"}
    // ];
  }

}
