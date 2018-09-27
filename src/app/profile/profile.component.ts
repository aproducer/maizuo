import { Component, OnInit } from '@angular/core';
import { NavinfoService } from '../serve/navinfo.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private navinfo:NavinfoService) { }

  ngOnInit() {
  	  	this.navinfo.change("登录");
  }

}
