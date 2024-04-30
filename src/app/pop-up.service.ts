import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';
import { ModificationComponent } from './modification/modification.component';
import { EditComponent } from './edit/edit.component';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor(private dialog: MatDialog) { }

  openPopUp(){
    this.dialog.open(AddComponent)
  }

  openpopupmodify()
  {
    this.dialog.open(ModificationComponent)
  }

  openpopupEdit(){
    this.dialog.open(EditComponent)
  }
}

