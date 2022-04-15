import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  newProfilePicture?: File;

  isEditing: boolean = false;

  get user() {
    return this.userService.user;
  }

  constructor(private userService: UserService, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Profile');
  }

  submit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.userService.updateProfileInfo$(form.value).subscribe(() => {
      this.isEditing = !this.isEditing;
    });
  }

  profilePictureChange(event: Event) {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    
    this.newProfilePicture = input.files![0];    
    if (this.newProfilePicture) {
      this.userService.editProfileImage$(this.newProfilePicture).subscribe();
    }
    
  }
}
