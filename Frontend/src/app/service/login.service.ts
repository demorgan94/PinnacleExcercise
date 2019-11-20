import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  USERNAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

  public username: string;
  public password: string;

  constructor(private http: HttpClient) { }

  loginService(username: string, password: string) {
    return this.http.get('http://localhost:8080/api/login', { headers: { authorization: this.createBasicAuthToken(username, password) } })
      .pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessLogin(username, password);
      }));
  }

  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ":" + password);
  }

  registerSuccessLogin(username, password) {
    sessionStorage.setItem(this.USERNAME_SESSION_ATTRIBUTE_NAME, username);
  }

  logout() {
    sessionStorage.removeItem(this.USERNAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(this.USERNAME_SESSION_ATTRIBUTE_NAME);

    if (user === null) {
      return false;
    } else {
      return true;
    }
  }

  getLoggedInUsername() {
    const user = sessionStorage.getItem(this.USERNAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) {
      return '';
    } else {
      return user;
    }
  }
}
