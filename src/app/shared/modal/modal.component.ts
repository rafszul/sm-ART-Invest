import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-modal',
  exportAs: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

@Output() modalClose: EventEmitter<any> = new EventEmitter<any>();

  constructor( private router : Router ) {}
    
  closeModal( $event ) {
    this.router.navigate([{outlets: {modal: null}}]);
    this.modalClose.next($event);
  }

  ngOnInit() {
  }

}
