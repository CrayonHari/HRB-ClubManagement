import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(private signupService: AuthService) {}

  SignUp(
    nameInput: HTMLInputElement,
    rollnoInput: HTMLInputElement,
    emailInput: HTMLInputElement,
    passwordInput: HTMLInputElement,
    passwordConfirmationInput: HTMLInputElement
  ) {
    const name = nameInput.value;
    const rollno = rollnoInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const password_confirmation = passwordConfirmationInput.value;
    this.signupService.makeSignUp(
      name,
      rollno,
      email,
      password,
      password_confirmation
    );
  }
}
