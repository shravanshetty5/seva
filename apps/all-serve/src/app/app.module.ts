import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataAccessModule } from '@seva/data-access';
import { UiModule } from '@seva/ui';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiModule, DataAccessModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
