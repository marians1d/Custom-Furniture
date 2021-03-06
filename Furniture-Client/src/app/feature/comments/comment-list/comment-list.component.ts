import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() comments!: IComment[]

  constructor() { }

  ngOnInit(): void {
  }

}
