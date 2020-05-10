import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServicesListComponent } from './services-list/services-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ServicesListComponent],
  exports: [ServicesListComponent]
})
export class UiModule {}
