import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Events } from '../model/events';
import { EventsService } from '../services/events/events.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  public pages: Array<{title: string, component: any}>;

  allEvents: Events[] = [];

  constructor(private menu: MenuController, private eventService: EventsService) {
    // this.pages = [
    //   { title: "Diesen Monat in Kiel", component: HomePage },
    //   //{ title: "Traumschiffe", component: ShipsPage },
    //   //{ title: "Livekarte", component: LiveMapPage },
    //   //{ title: "Aussichtspunkte", component: ViewpointsPage },
    //   //{ title: "Info", component: InfoPage }
    // ];
  }



  ngOnInit() {
    // this.eventService.loadEvents().then((event: Events[]) => {
    //   this.allEvents = event;
    // }, error => {
    //   this.allEvents = [];
    // });
  }


}


