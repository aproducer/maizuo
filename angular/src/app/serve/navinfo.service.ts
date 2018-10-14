import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class NavinfoService {
	change = null;
	constructor() {}

	get(fun) {
		this.change=fun;
	}
}