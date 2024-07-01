import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {EventService} from "../../service/event.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-event',
  templateUrl: './addevent.component.html',
})
export class AddeventComponent {
  eventForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddeventComponent> ,
    private eventService: EventService ,
    private router : Router

  ) {
    this.eventForm = this.fb.group({
      location: ['', Validators.required],
      description: ['', Validators.required],
      debutDate: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      let eventData = this.eventForm.value;
      this.eventService.addEvent(eventData).subscribe(
        response => {
          console.log('event created with succes :', response);
          this.eventForm.reset();
          this.dialogRef.close(response);
          this.router.navigate(['event']);
        },
        error => {
          console.error('ERROR :', error);
        }
      );
    }
  else
    {

      console.error('FormInvalid');
    }
  }

}
