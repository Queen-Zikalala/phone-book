import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

// to be removed, adding to the interceptor
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    observe: 'response'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient,
    @Inject('phoneBookServiceURL') private apiUrl: string) { }

    get<T>(path: string, params: HttpParams = new HttpParams(), headers: HttpHeaders = new HttpHeaders()): Observable<T> {
      return this.httpClient.get<T>(this.apiUrl + path, { params, headers, withCredentials: true });
    }
  
    post<T>(path: string, body: object = {},
      params: HttpParams = new HttpParams(), headers: HttpHeaders = new HttpHeaders()): Observable<T> {
      let tempHeaders: HttpHeaders = new HttpHeaders();
      if (headers.keys().length > 0) {
        headers.keys().forEach((v: any) => {
          tempHeaders = tempHeaders.append(v, headers.get(v) || '');
        });
      }
      httpOptions.headers.keys().forEach((v) => {
        tempHeaders = tempHeaders.append(v, httpOptions.headers.get(v) || '');
      });
      return this.httpClient.post<T>(this.apiUrl + path, JSON.stringify(body),
        { headers: tempHeaders, params }).pipe(map(data => data));
    }
  
    postFile(path: string, formData: FormData): Observable<HttpEvent<any>> | Observable<Blob> | Observable<any> {
      return this.httpClient.post(this.apiUrl + path, formData, { reportProgress: true, observe: 'events', responseType: 'blob' });
    }
  
    patch<T>(path: string,
      body: object = {}, params: HttpParams = new HttpParams(), headers: HttpHeaders = new HttpHeaders()): Observable<T> {
      let tempHeaders: HttpHeaders = new HttpHeaders();
      if (headers.keys().length > 0) {
        headers.keys().forEach((v) => {
          tempHeaders = tempHeaders.append(v, headers.get(v) || '');
        });
      }
      httpOptions.headers.keys().forEach((v) => {
        tempHeaders = tempHeaders.append(v, httpOptions.headers.get(v) || '');
      });
      return this.httpClient.patch<T>(this.apiUrl + path, JSON.stringify(body), { headers: tempHeaders, params }).pipe(map(data => data));
    }
  
    put<T>(path: string, body: object = {}, params: HttpParams = new HttpParams()): Observable<T> {
      return this.httpClient.put<T>(this.apiUrl + path, body, { params });
    }
  
    delete(path: string, params: HttpParams = new HttpParams()): Observable<any> {
      const headers = new HttpHeaders({ Accept: 'application/json' });
      return this.httpClient.delete(this.apiUrl + path, { headers, params }).pipe();
    }
  
    downloadFileUsingPost(path: string, body: object = {}): Observable<any> {
      return this.httpClient.post(this.apiUrl + path, body, { responseType: 'blob' });
    }
  
    downloadFileUsingGet(path: string, params: HttpParams = new HttpParams()): Observable<any> {
      return this.httpClient.post(this.apiUrl + path, { responseType: 'blob', params });
    }
}
