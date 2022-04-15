import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { samePasswordAsFactory } from 'src/app/shared/validators';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  errorMessage: string | undefined = undefined;

  killSubscription = new Subject();

  form: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router, private title: Title) { 
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      repass: ['', [Validators.required, samePasswordAsFactory(
        () => this.form?.get('password'), this.killSubscription
      )]],
      tel: ['']
    })
  }

  ngOnInit(): void {
    this.title.setTitle('Register')
  }

  register() {
    if (this.form.invalid) { return; }

    const {username, email, password, tel} = this.form.value;

    const body: {username: string, email: string, password: string, tel?: string} =  {username, email, password};

    if (tel !== '') {
      body.tel = tel;
    }

    this.userService.register$(body).subscribe({
      next: () => {
      this.router.navigate(['/']);
    },
    error: (err) => {      
      this.errorMessage = err.error.message;
    }
    });
  }

  ngOnDestroy(): void {
    this.killSubscription.next(null);
    this.killSubscription.complete();
  }
}
