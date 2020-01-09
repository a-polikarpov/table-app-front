import {Component, OnInit, ViewChild} from '@angular/core';
import {AddItemModalComponent} from './components/add-item-modal/add-item-modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild(AddItemModalComponent) addItemModal;

  constructor() { }

  ngOnInit() {
  }

  shodAddItemModal() {
    this.addItemModal.show();
  }

  createPerson({ firstName, secondName, email }) {
    console.log(firstName, secondName, email);
  }

}
