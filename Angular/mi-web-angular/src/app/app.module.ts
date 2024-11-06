import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiEmpresaComponent } from './sobre-mi-empresa/sobre-mi-empresa.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobreMiEmpresaComponent,
    HeaderComponent,
    FooterComponent,
    ExhibitionsComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
