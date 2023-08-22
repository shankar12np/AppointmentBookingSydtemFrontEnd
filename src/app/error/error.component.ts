import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage = 'An error occurred! Contact Tilak Sir at Diyo!!!';
  errorMessagePart = 'Diyo!!!';
  errorMessageStyle = '';

  constructor(public route : ActivatedRoute) {}

  ngOnInit(): void {
    this.applyErrorMessageStyle();
  }

  applyErrorMessageStyle(): void {
    this.errorMessageStyle = 'flash-red';
  }
}
