import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { AcercaDeMiComponent } from './componentes/acerca-de-mi/acerca-de-mi.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { LoginComponent } from './componentes/formularios/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';


@NgModule({

  declarations: [
    AppComponent,
    EncabezadoComponent,
    PerfilComponent,
    AcercaDeMiComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    ContactosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
   
   
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule 
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
