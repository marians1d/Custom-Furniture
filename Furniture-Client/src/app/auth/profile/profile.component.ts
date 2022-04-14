import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  isEditing: boolean = false;

  get user() {
    return this.userService.user;
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    
  }

  submit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.userService.updateProfileInfo$(form.value).subscribe(() => {
      this.isEditing = !this.isEditing;
    });
  }

  getUser() {
    console.log(this.user);
    
  }
}
