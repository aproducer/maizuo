import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'app-now-playing',
	templateUrl: './now-playing.component.html',
	styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {
	films=[];
	constructor(private http:Http) {}

	ngOnInit() {
		this.http.get('/v4/api/film/now-playing?page=1&count=7').toPromise().then(res=>{
			console.log(res.json());
			this.films=res.json().data.films;
		})
	}

}