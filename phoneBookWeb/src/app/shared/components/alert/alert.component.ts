import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Alert, AlertType } from 'src/app/core/model/alert';
import { AlertService } from '../../services/alert.service';
import { debounce } from 'rxjs/operators';
import { scrollTop } from '../../../core/util/scroll-top';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  alert$: Observable<Alert> = this.alertService.getAlert();
  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alert$
      .pipe(
        debounce((alert) => {
          if (alert) {
            scrollTop();
            return timer(alert.duration);
          } else {
            return timer(0);
          }
        }))
      .subscribe(
        (alert) => {
          if (alert) {
            this.close(alert);
          }
        }
      );
  }

  close(toast?: any): void {
    this.alertService.alert(null);
  }

  cssClass(alert: Alert | null): any {
    if (!alert) {
      return 'alert alert-dismissible text-center fade';
    }

    switch (alert.type) {
      case AlertType.Success:
        return 'alert alert-success alert-dismissible text-center fade show';
      case AlertType.Error:
        return 'alert alert-danger alert-dismissible text-center fade show';
      case AlertType.Info:
        return 'alert alert-info alert-dismissible text-center fade show';
      case AlertType.Warning:
        return 'alert alert-warning alert-dismissible text-center fade show';
    }
  }
}
