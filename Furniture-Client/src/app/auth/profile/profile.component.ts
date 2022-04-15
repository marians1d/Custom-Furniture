import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    
  }

  submit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const user: {
      username: string,
      email: string,
      tel?: string,
      profileImageUrl: File | undefined
    } = {
      username: form.value.username,
      email: form.value.email,
      profileImageUrl: this.newProfilePicture
    }

    if (form.value.tel) {
      user.tel = form.value.tel
    }


    this.userService.updateProfileInfo$(user).subscribe(() => {
      this.isEditing = !this.isEditing;
    });
  }

  profilePictureChange(event: Event) {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    
    this.newProfilePicture = input.files![0];    
  }
}
