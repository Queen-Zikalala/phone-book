import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Alert, AlertType } from 'src/app/core/model/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alert$: Subject<Alert> = new BehaviorSubject<any>(null);

  constructor() { }

  public success(message: string, duration: number = 8000): void {
    this.alert(new Alert({ message, type: AlertType.Success, duration }));
  }

  public error(message: string, duration: number = 8000): void {
    this.alert(new Alert({ message, type: AlertType.Error, duration }));
  }

  public info(message: string, duration: number = 8000): void {
    this.alert(new Alert({ message, type: AlertType.Info, duration }));
  }

  public warn(message: string, duration: number = 8000): void {
    this.alert(new Alert({ message, type: AlertType.Warning, duration }));
  }

  public alert(alert: Alert | null): void {
    if (alert) {
      this.alert$.next(alert);
    } else {
      // this.alert$.next();
    }

  }

  public getAlert(): Observable<Alert> {
    return this.alert$.asObservable();
  }
}
