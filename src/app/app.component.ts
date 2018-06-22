import { Component } from '@angular/core';
import {FakerService} from "./faker.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fakerService: FakerService){

  }
  title = 'app';
}
