import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'app-cinema',
	templateUrl: './cinema.component.html',
	styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
	cinemas = {}
	districts=[];
	constructor(private http: Http) {}

	ngOnInit() {
		this.http.get("/v4/api/cinema?__t=1537962319155").subscribe(reg => {
			console.log(reg.json().data.cinemas);
			reg.json().data.cinemas.forEach((cinema) => {
				if(!this.cinemas[cinema.district.name]) {
					this.cinemas[cinema.district.name] = [];
					this.cinemas[cinema.district.name].show=false;
				}
				this.cinemas[cinema.district.name].push(cinema);
			});
			this.districts=Object.keys(this.cinemas);
			console.log(this.cinemas,this.districts);
		});

	}
	show(str){
		console.log(str,this.cinemas[str].show);
		this.cinemas[str].show=!this.cinemas[str].show;
	}
}