import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }


}
