import { Component, OnInit } from '@angular/core';
import { PopUpService } from '../pop-up.service';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {
ses: any;

  constructor(private service : PopUpService) { }

  ngOnInit(): void {
  }

  onEdit(ses){
    this.service.openpopupEdit()
  }
}
