import { Component } from '@angular/core';
import {AlertService} from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'table-app-front';

  alertStyle$ = this.alert.alertStyle$;
  alertMessage$ = this.alert.alertMessage$;
  showAlert$ = this.alert.showAlert$;

  constructor(private alert: AlertService) {
  }
}
