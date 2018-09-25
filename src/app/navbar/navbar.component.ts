import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	constructor() {}

	ngOnInit() {}
	ifShow = false;
	show(elemt,mask) {
		this.ifShow = !this.ifShow;
		this.ifShow?(mask.style.display="block"):(setTimeout(function(){mask.style.display="none"},500));
		this.ifShow ? (elemt.style.animation = "show alternate .5s ease forwards") : (elemt.style.animation = "hide alternate .5s ease forwards");
		this.ifShow ? (mask.style.animation = "fadeIn alternate .5s ease forwards") : (mask.style.animation = "fadeOut alternate .5s ease forwards");
	}
}