import { Component, OnInit } from '@angular/core';
import { NavinfoService } from '../serve/navinfo.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private navinfo:NavinfoService) { }

  ngOnInit() {
  	this.navinfo.change("商城");
  }

}
