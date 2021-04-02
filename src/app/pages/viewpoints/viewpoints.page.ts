import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Viewpoints } from 'src/app/model/viewpoint';
import { ViewpointsService } from 'src/app/services/viewpoints/viewpoints.service';

@Component({
  selector: 'app-viewpoints',
  templateUrl: './viewpoints.page.html',
  styleUrls: ['./viewpoints.page.scss'],
})
export class ViewpointsPage implements OnInit {

  loaededViewpoints: Viewpoints[] = [];


  constructor(private viewpointService: ViewpointsService) { }

  ngOnInit() {
    this.viewpointService.loadViewpoints().then((viewpoints: Viewpoints[]) => {
      this.loaededViewpoints = viewpoints;
    }, error => {
      this.loaededViewpoints = [];
    });
  }

}
