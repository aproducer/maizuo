import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
	providedIn: 'root'
})
export class DetailService {
	id = "4392";
	data = "";
	fun="";
	constructor(private http: Http) {}
	getDetail(id) {
		this.http.get(`/v4/api/film/${id}?__t=1537861184760`).subscribe(reg => {	
			this.data = reg.json();
			console.log(this.data);
			this.fun(this.data);
		})
	}
	showDetail(fun){
		this.fun=fun;
	}
}