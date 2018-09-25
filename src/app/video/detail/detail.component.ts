import { Component, OnInit } from '@angular/core';
import { DetailService } from '../../serve/detail.service';
import { ActivatedRoute } from '@angular/router';
@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
	film=null;
	actors=[];
	constructor(private detail: DetailService, private acr: ActivatedRoute) {}

	ngOnInit() {
		this.acr.params.subscribe(reg=>{
			console.log(reg);
			this.detail.getDetail(reg.id);
		});
		this.detail.showDetail((data)=>{
			this.film=data.data.film;
			console.log(this.film);
			this.film.actors.forEach((val)=>{
				this.actors.push(val.name);
			});
			this.actors.str=this.actors.join(" | ");
			console.log(this.actors.str);
		});
	}

}