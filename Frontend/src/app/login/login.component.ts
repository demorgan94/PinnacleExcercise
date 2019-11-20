import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  handleLogin() {
    this.loginService.loginService(this.username, this.password)
      .subscribe((res) => {
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful';
        this.router.navigate(['/contacts']);
      }, () => {
        this.invalidLogin = true;
        this.loginSuccess = false;
      });
  }

}
