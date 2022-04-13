import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from 'src/app/shared/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuCollapsed: boolean = true;

  
  get isLogged() : boolean {
    return this.userService.isLogged;
  }

  get currentUser() : IUser | null | undefined {
    return this.userService.user;
  }
  

  constructor(private userService: UserService, private router: Router) { }

  logout(): void {
    this.userService.logout$().subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
