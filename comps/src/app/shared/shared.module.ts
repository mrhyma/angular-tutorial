import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivierComponent } from './divier/divier.component';

@NgModule({
  declarations: [DivierComponent],
  imports: [CommonModule],
  exports: [DivierComponent],
})
export class SharedModule {}
