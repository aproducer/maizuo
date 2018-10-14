import { Component, OnInit } from '@angular/core';
import { NavinfoService } from '../serve/navinfo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private navinfo:NavinfoService) { }

  ngOnInit() {
  	this.navinfo.change("查询/绑定/激活卖座卡");
  }

}
