import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private _alertStyleSubject = new BehaviorSubject<'alert-success' | 'alert-danger'>(null);
  private _alertMessageSubject = new BehaviorSubject<string>(null);
  private _showAlertSubject = new BehaviorSubject<boolean>(false);

  readonly alertStyle$ = this._alertStyleSubject.asObservable();
  readonly alertMessage$ = this._alertMessageSubject.asObservable();
  readonly showAlert$ = this._showAlertSubject.asObservable();

  constructor() { }

  showAlert(style: 'alert-success' | 'alert-danger', message: string) {
    this._alertStyleSubject.next(style);
    this._alertMessageSubject.next(message);
    this._showAlertSubject.next(true);

    setTimeout(() => this.clearAlert(), 1000);
  }

  clearAlert() {
    this._showAlertSubject.next(false);
    this._alertStyleSubject.next(null);
    this._alertMessageSubject.next(null);
  }
}
