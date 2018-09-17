import { ToastrService } from './../common/toastr.service';
import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    template: `
    <div>
        <h1>All the Going's On</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)=handleThumbnailClick(event.name) [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {

    events: any[];
// tslint:disable-next-line:eofline
    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName);
    }
}
