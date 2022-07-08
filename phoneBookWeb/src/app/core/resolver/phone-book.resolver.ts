import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PhoneBookService } from '../services/phone-book.service';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookResolver implements Resolve<boolean> {

  constructor(private phoneBookService: PhoneBookService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.phoneBookService.getAll();
  }
}
