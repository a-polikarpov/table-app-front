import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent implements OnInit {
  @ViewChild('addItemModal') addItemModal: ModalDirective;
  @Output() createPerson = new EventEmitter<{firstName: string, lastName: string, email: string}>();

  firstName = '';
  lastName = '';
  email = '';

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.addItemModal.show();
  }

  hide() {
    this.clearFields();
    this.addItemModal.hide();
  }

  setFirstName(v) {
    this.firstName = v;
  }

  setLastName(v) {
    this.lastName = v;
  }

  setEmail(v) {
    this.email = v;
  }

  clearFields() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
  }

  emitCreate() {
    const { firstName, lastName, email } = this;
    this.createPerson.emit({ firstName, lastName, email });
  }

}
