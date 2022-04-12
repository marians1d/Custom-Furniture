import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HomeComponent,
    NotFoundPageComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }