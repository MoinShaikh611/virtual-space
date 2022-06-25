import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  postUserData(data): Observable<any> {
    return this.http.post<any>(
      'https://my-app-3-r93dc.ondigitalocean.app/contact-us',
      data
    );
  }
}
