import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinerComponent } from './spiner/spiner.component';
import { TimeDiffPipe } from './pipes/time-diff.pipe';



@NgModule({
  declarations: [
    SpinerComponent,
    TimeDiffPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinerComponent,
    TimeDiffPipe
  ]
})
export class SharedModule { }
