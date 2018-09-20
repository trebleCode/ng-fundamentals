import { Component } from '@angular/core';
import { AuthService } from './../events/user/auth.service';
import { ISession } from './../events/shared/event.model';
import { EventService } from './../events/shared/event.service';

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
    searchTerm = '';
    foundSessions: ISession[];

    constructor(public auth: AuthService, private eventService: EventService) {
    }

    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe
        (sessions => {
            this.foundSessions = sessions;
            console.log(this.foundSessions);
        });
    }
}
