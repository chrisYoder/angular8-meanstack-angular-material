import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	opened = true;
	@ViewChild('sidenav') sidenav: MatSidenav;
	
	ngOnInit(){
		console.log(window.InnerWidth)
		if(window.innerWidth < 768){
			this.sidenav.fixedTopGap = 55;
			this.opened = false;
		} else {
			this.sidenav.fixedTopGap = 55;
			this.opened = true;
		}			   
	}
	
	@HostListener('window:resize', ['$event'])
	onResize
}
