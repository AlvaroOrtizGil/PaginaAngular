import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component'; // Asegúrate de importar el componente Home
import { ExhibitionsComponent } from './exhibitions/exhibitions.component'; // Para Exhibiciones
import { AboutComponent } from './about/about.component'; // Para About
import { ContactComponent } from './contact/contact.component'; // Para Contact
const routes: Routes = [ {path: '', redirectTo: '/inicio', pathMatch:'full'},
{path:'inicio',component:InicioComponent},
{ path: 'exhibitions', component: ExhibitionsComponent },  // Ruta para Exhibiciones
{ path: 'about', component: AboutComponent },  // Ruta para About
 { path: 'contact', component: ContactComponent }  // Ruta para Contacto

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
