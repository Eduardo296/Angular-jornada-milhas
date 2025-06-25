import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  imports: [
    MatChipsModule,

  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  constructor(public dialog: MatDialog) {}

  closeDialog() {
    this.dialog.closeAll();
  }

}
