import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArabicNumTransPipe } from './arabic-num-trans.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArabicNumTransPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
