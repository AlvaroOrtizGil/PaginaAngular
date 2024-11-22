import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component'; // Para Exhibiciones
import { AboutComponent } from './about/about.component'; // Para About
import { ContactComponent } from './contact/contact.component'; // Para Contact
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';
const routes: Routes = [ {path: '', redirectTo: '/inicio', pathMatch:'full'},
{path:'inicio',component:InicioComponent},
{ path: 'exhibitions', component: ExhibitionsComponent },  // Ruta para Exhibiciones
{ path: 'about', component: AboutComponent },  // Ruta para About
 { path: 'contact', component: ContactComponent },
 { path: 'politica-privacidad', component: PoliticaPrivacidadComponent }// Ruta para Contacto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
