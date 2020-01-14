import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { ApiComponent } from './componentes/api/api.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    SegundoComponenteComponent,
    ApiComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
