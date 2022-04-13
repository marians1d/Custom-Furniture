import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage: string | undefined = undefined;

  constructor(private userService: UserService, private router: Router) { }

  login(form: NgForm): void {
    if (form.invalid) { return; }
    const { email, password } = form.value;

    this.userService.login$({ email, password }).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {        
        this.errorMessage = err.error.message;
      }
    });
  }

}
