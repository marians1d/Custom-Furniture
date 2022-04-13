import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
