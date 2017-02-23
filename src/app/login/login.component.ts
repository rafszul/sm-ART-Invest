import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  modalClose( $event ) {
    console.log($event); // { submitted: true }
  }

  constructor() { }

  ngOnInit() {
  }

}
