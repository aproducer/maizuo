import { Component, OnInit } from '@angular/core';
import { NavinfoService } from '../serve/navinfo.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private navinfo:NavinfoService) { }

  ngOnInit() {
  	this.navinfo.change("卖座电影");
  }

}
