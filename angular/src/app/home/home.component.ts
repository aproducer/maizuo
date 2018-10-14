import { Component, OnInit } from '@angular/core';
import { NavinfoService } from '../serve/navinfo.service';
import { Http } from '@angular/http';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	billboards = null;
	nowplaying = null;
	comingsoon=null;
	display = false;
	constructor(private http: Http,private navinfo:NavinfoService) {}

	ngOnInit() {
		this.http.get('/v4/api/billboard/home?__t=1537927225846').subscribe(reg => {
			this.billboards = reg.json().data.billboards;
			this.display = this.billboards.length > 0 ? true : false;
			console.log(this.billboards, this.display);
		});
		this.http.get('/v4/api/film/now-playing?__t=1537510181646&page=1&count=5').subscribe(reg => {
			this.nowplaying = reg.json().data.films;
			console.log(this.nowplaying);
		});
		this.http.get('/v4/api/film/coming-soon?__t=1537956044552&page=1&count=3').subscribe(reg => {
			this.comingsoon = reg.json().data.films;
			console.log(this.comingsoon);
		});
		this.navinfo.change("卖座电影");
	}
	config: SwiperOptions = {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		spaceBetween: 30,
		loop: true,
		autoplay: 2000
	};
}