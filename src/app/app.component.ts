import { Component } from '@angular/core';
import { PopUpService } from './pop-up.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task4';
  constructor(private popservice : PopUpService){}

  addSes(){
    this.popservice.openPopUp();
  }
}
