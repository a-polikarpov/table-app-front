import {Component, OnInit, ViewChild} from '@angular/core';
import {AddItemModalComponent} from './components/add-item-modal/add-item-modal.component';
import {AlertService} from '../../services/alert.service';
import {PersonService} from '../../services/person.service';
import {IPerson} from '../../model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild(AddItemModalComponent) addItemModal;
  persons: IPerson[] = [];

  constructor(
    private alert: AlertService,
    private personService: PersonService
  ) { }

  ngOnInit() {
    this.fetchPersons();
  }

  shodAddItemModal() {
    this.addItemModal.show();
  }

  createPerson({ firstName, lastName, email }) {
    this.personService.create({ firstName, lastName, email}).subscribe(
      ({ user }) => {
        this.alert.showAlert('alert-success', `The user ${user.firstName} ${user.lastName} (${user.email}) was created`);
        this.fetchPersons();
      }
    )

  }

  updatePerson(id: any, field: 'firstName' | 'lastName' | 'email', v: string) {
    const data = {};
    data[field] = v;
    this.personService.updateById(id, data).subscribe(
      ({ user }) => {
        this.alert.showAlert('alert-success', `The user was changed to ${user.firstName} ${user.lastName} (${user.email})`);
        this.fetchPersons();
      }
    )
  }

  fetchPersons() {
    return this.personService.getAll().subscribe(
      response => this.persons = response.users
    );
  }

  removePerson(id) {
    return this.personService.removeById(id).subscribe(() => this.fetchPersons());
  }

}
