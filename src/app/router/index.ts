import { RouterModule } from "@angular/router";
import { HomeComponent } from '../home/home.component';
import { VideoComponent } from '../video/video.component';
import { CinemaComponent } from '../cinema/cinema.component';
import { ShopComponent } from '../shop/shop.component';
import { ProfileComponent } from '../profile/profile.component';
import { CardComponent } from '../card/card.component';
import { NowPlayingComponent } from '../video/now-playing/now-playing.component';
import { ComingSoonComponent } from '../video/coming-soon/coming-soon.component';
import { DetailComponent } from '../video/detail/detail.component';

const myRouter = RouterModule.forRoot([{
	path: "home",
	component: HomeComponent
}, {
	path: "video",
	component: VideoComponent,
	children: [{
		path: 'now-playing',
		component: NowPlayingComponent
	}, {
		path: 'coming-soon',
		component: ComingSoonComponent,
	}, {
		path: '',
		redirectTo: '/video/now-playing',
		pathMatch: 'prefix'
	}]
}, {
	path: "film/:id",
	component: DetailComponent
},{
	path: "cinema",
	component: CinemaComponent
}, {
	path: "shop",
	component: ShopComponent
}, {
	path: "profile",
	component: ProfileComponent
}, {
	path: "card",
	component: CardComponent
}, {
	path: "",
	redirectTo: '/home',
	pathMatch: 'prefix'
}]);

export {
	myRouter
}