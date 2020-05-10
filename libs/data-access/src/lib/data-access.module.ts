import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

export { ServicesService } from './services.service';

@NgModule({
  imports: [CommonModule, HttpClientModule]
})
export class DataAccessModule {}
