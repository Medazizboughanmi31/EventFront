import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddeventComponent} from "../addevent/addevent.component";
import {EventModule} from "../../../models/event.module";
import {EventService} from "../../service/event.service";
import {event} from "jquery";

@Component({
  selector: 'app-viewevent',
  templateUrl: './viewevent.component.html',
  styleUrls: ['./viewevent.component.scss']
})
export class VieweventComponent {
  events: EventModule[] = [];
  constructor(private dialog: MatDialog , private eventService : EventService) {}
  openAddEventDialog(): void {
    const dialogRef = this.dialog.open(AddeventComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Event added successfully', result);
      }
    });
  }
  ngOnInit(): void {
    this.loadevents();
  }

  loadevents() {
    this.eventService.getEvents().subscribe(
      events => {
        this.events = events;
        console.log(this.events)
      },
      error => {
        console.error('Erreur lors du chargement des events :', error);
      }
    );
  }

  deleteevent(event: EventModule) {
    if (event.idEvent !== undefined) {
      this.eventService.removeEvent(event.idEvent).subscribe(
          () => {
            // Filtrer l'utilisateur supprimé de la liste des utilisateurs affichés
            this.events = this.events.filter(u => u !== event);
          },
          error => {
            console.error('Erreur lors de la suppression  :', error);
          }
      );
    } else {
      console.error('L\'identifiant  est indéfini.');
    }
  }
}
