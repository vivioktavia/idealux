import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();
  constructor(
    private auth: AuthService
  ) {}
  onLogin(): void {
    this.auth.login(this.user)
    .then((res) => {
      console.log(res);
      console.log(JSON.parse(res._body).token);
      localStorage.removeItem('token');
      localStorage.setItem('token', JSON.parse(res._body).token);
      console.log("ini token dari local storage")
      console.log(localStorage.getItem('token'))
    }).catch((err) => {
      console.log(err);
    });
  }
}