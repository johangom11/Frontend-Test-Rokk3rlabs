import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavAsideService } from './nav-aside.service';


@Component({
    selector: 'app-nav',
    templateUrl: './nav-aside.component.html',
    styleUrls: ['./nav-aside.component.css'],
    providers: [NavAsideService]
})
export class NavAsideComponent {

    constructor(private nav: NavAsideService, private router: Router) { }

    closeMenu() {

    }

}
