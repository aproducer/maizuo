import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'app-coming-soon',
	templateUrl: './coming-soon.component.html',
	styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
	films=[];
	constructor(private http:Http) {}

	ngOnInit() {
		this.http.get('/v4/api/film/coming-soon?page=1&count=7').toPromise().then(res=>{
			console.log(res.json());
			this.films=res.json().data.films;
		})
	}
}