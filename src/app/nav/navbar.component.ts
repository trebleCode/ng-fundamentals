import { Component } from '@angular/core';
import { AuthService } from './../events/user/auth.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [
        `
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 55px;}
        @media (max-width: 1200px) {#searchForm {display:none}}
        li > a.active { color: #F97924; }
        `
    ]
})
export class NavBarComponent {
    constructor(public auth: AuthService) {

    }
}
