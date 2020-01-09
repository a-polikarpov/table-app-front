import {Component, OnInit, ViewChild} from '@angular/core';
import {AddItemModalComponent} from './components/add-item-modal/add-item-modal.component';
import {AlertService} from '../../services/alert.service';
import {PersonService} from '../../services/person.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild(AddItemModalComponent) addItemModal;

  constructor(
    private alert: AlertService,
    private personService: PersonService
  ) { }

  ngOnInit() {
  }

  shodAddItemModal() {
    this.addItemModal.show();
  }

  createPerson({ firstName, secondName, email }) {
    this.alert.showAlert('alert-success', `The user ${firstName} ${secondName} (${email}) was created`);
  }

  removePerson(id) {
    this.alert.showAlert('alert-success', 'The user was deleted');
  }

}
