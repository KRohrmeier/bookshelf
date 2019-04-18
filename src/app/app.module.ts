import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';import { MediaItemComponent } from './media/media-item/media-item.component';

@NgModule({
  declarations: [
    AppComponent
    , MediaItemComponent
  ],
  imports: [
    BrowserModule
    , NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
