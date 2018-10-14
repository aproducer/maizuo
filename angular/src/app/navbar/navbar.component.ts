import { Component, OnInit } from '@angular/core';
import { NavinfoService } from '../serve/navinfo.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	constructor(private navinfo:NavinfoService) {}

	ngOnInit() {
		this.navinfo.get((str)=>{
			this.title=str;
		})
	}
	ifShow = false;
	title="卖座电影";
	show(elemt,mask) {
		this.ifShow = !this.ifShow;
		this.ifShow?(mask.style.display="block"):(setTimeout(function(){mask.style.display="none"},500));
		this.ifShow ? (elemt.style.animation = "show alternate .5s ease forwards") : (elemt.style.animation = "hide alternate .5s ease forwards");
		this.ifShow ? (mask.style.animation = "fadeIn alternate .5s ease forwards") : (mask.style.animation = "fadeOut alternate .5s ease forwards");
	}
}