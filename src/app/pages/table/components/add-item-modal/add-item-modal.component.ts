import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent implements OnInit {
  @ViewChild('addItemModal') addItemModal: ModalDirective;
  @Output() createPerson = new EventEmitter<{firstName: string, secondName: string, email: string}>();

  firstName = '';
  secondName = '';
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

  setSecondName(v) {
    this.secondName = v;
  }

  setEmail(v) {
    this.email = v;
  }

  clearFields() {
    this.firstName = '';
    this.secondName = '';
    this.email = '';
  }

  emitCreate() {
    const { firstName, secondName, email } = this;
    this.createPerson.emit({ firstName, secondName, email });
  }

}
