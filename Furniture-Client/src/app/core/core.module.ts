import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { appInterceptorProvider } from './app-interceptors';
import { UserService } from './services/user.service';
import { OrderService } from './services/order.service';
import { CommentService } from './services/comment.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    appInterceptorProvider,
    UserService,
    OrderService,
    CommentService
  ]
})
export class CoreModule { }
