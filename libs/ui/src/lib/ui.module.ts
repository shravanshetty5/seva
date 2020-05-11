import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddServiceComponent } from './add-service/add-service.component';
import { ServicesListComponent } from './services-list/services-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ServicesListComponent, AddServiceComponent],
  exports: [ServicesListComponent, AddServiceComponent]
})
export class UiModule {}
