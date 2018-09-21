import { IEvent, ISession } from './../shared/event.model';
import { EventService } from './../shared/event.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
templateUrl: './event-details.component.html',
styles: [`
    .container { padding-left:20px; padding-right: 20px; }
    .event-image { height: 100px;}
    a { cursor: pointer }
`]
})
export class EventDetailsComponent {
    event: IEvent;
    addMode: boolean;
    filterBy = 'all';
    sortBy = 'votes';

    constructor(private eventService: EventService, private route: ActivatedRoute) {
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.event = this.eventService.getEvent(+params['id']);
            this.addMode = false;
        });
    }
}
