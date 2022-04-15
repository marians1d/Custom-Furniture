import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string | undefined = undefined;

  constructor(private userService: UserService, private router: Router, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Login')
  }

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
