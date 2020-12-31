import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelVerdeComponent } from './painel-verde/painel-verde.component';
import { PainelAzulComponent } from './painel-azul/painel-azul.component';
import { PainelVermelhoComponent } from './painel-vermelho/painel-vermelho.component';
import { MyGoldenLayoutCoresComponent } from './my-golden-layout-cores/my-golden-layout-cores.component';
//import * as GL from 'golden-layout/dist/goldenlayout.js'

import * as $ from 'jquery';
window['$'] = $;
//global['GL'] = GL;

@NgModule({
  declarations: [
    AppComponent,
    PainelVerdeComponent,
    PainelAzulComponent,
    PainelVermelhoComponent,
    MyGoldenLayoutCoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
