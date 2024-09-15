import { Component, input } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {
  constructor(private loginService: AuthService) {}

  login(emailInput: HTMLInputElement, passwordInput: HTMLInputElement) {
    const email = emailInput.value;
    const password = passwordInput.value;
    const response = this.loginService.makeLogin(email, password);

    console.log(response);
  }
}
