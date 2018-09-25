import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router'
import { mList } from './data';
@Component({
	selector: 'app-coming-soon',
	templateUrl: './coming-soon.component.html',
	styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
	data = mList;
	constructor(private router:Router) {}

	ngOnInit() {
		console.log(this.data);
	}
	oC(item){
		this.router.navigate([`video/coming-soon/${item.id}`]);
	}
}