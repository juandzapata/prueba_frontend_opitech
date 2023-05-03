import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteTablaComponent } from './componente-tabla/componente-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteTablaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
