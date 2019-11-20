import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'https://pinnacle-excercise.herokuapp.com/api'

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getContact(id: number): Observable<any> {
    return this.http.get(this.baseUrl + `/${id}`);
  }

  addContact(contact: Contact): Observable<Object> {
    return this.http.post(this.baseUrl, contact);
  }

  updateContact(id: number, contact: Contact): Observable<Object> {
    return this.http.put(this.baseUrl + `/${id}`, contact);
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + `/${id}`, { responseType: 'text' });
  }
}
