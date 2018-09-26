import { Component, OnInit } from '@angular/core';
import { DetailService } from '../../serve/detail.service';
import { ActivatedRoute } from '@angular/router';
@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
	film = null;
	actors = [];
	actorstr="";
	constructor(private detail: DetailService, private acr: ActivatedRoute) {}

	ngOnInit() {
		this.acr.params.subscribe(reg => {
			console.log(reg);
			this.detail.getDetail(reg.id); //获取数据
		});
		this.detail.showDetail((data) => {
			this.film = data.data.film;
			console.log(this.film);
			this.film.actors.forEach((val) => {
				this.actors.push(val.name);
			});
			this.actorstr = this.actors.join(" | ");
			console.log(this.actorstr);
		});
	}

}