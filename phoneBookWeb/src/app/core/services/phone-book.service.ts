import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { PhoneBook } from '../model/phone-book';
import { ApiService } from './api.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService extends ApiService{

  baseURL="/phoneBook"

  create(requestData: any): Observable<PhoneBook> {
    return this.post(`${this.baseURL}`, requestData);
  }

  getAll(): Observable<PhoneBook[]> {
    return this.get<PhoneBook[]>(`${this.baseURL}/entryList`)
    .pipe(
      tap((response) => {
        console.log('data',response);
      }),
      map((response) => {
        return response
      }),
      catchError((e) => {
        return throwError(e);
      })
    );
    // (`${this.baseURL}/entryList`);
  }
}
