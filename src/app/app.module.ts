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
import { SkillsComponent } from './componentes/skills/skills.component';
import { RedesSocialesComponent } from './componentes/redes-sociales/redes-sociales.component';
import { NgCirclesModule } from './modules/ng-circles/ng-circles.module';
import { EditarPerfilComponent } from './componentes/formularios/editar-perfil/editar-perfil.component';
import { NewExperienciaComponent } from './componentes/formularios/FormulariosExperiencia/new-experiencia/new-experiencia.component';
import { NewEducacionComponent } from './componentes/formularios/FormulariosEducacion/new-educacion/new-educacion.component';
import { NewSkillsComponent } from './componentes/formularios/FormulariosSkills/new-skills/new-skills.component';
import { NewProyectosComponent } from './componentes/formularios/FormulariosProyecto/new-proyectos/new-proyectos.component';
import { EditarExperienciaComponent } from './componentes/formularios/FormulariosExperiencia/editar-experiencia/editar-experiencia.component';
import { EditarEducacionComponent } from './componentes/formularios/FormulariosEducacion/editar-educacion/editar-educacion.component';
import { EditarProyectoComponent } from './componentes/formularios/FormulariosProyecto/editar-proyecto/editar-proyecto.component';
import { EditSkillsComponent } from './componentes/formularios/FormulariosSkills/edit-skills/edit-skills.component';




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
    SkillsComponent,
    RedesSocialesComponent,
    EditarPerfilComponent,
    NewExperienciaComponent,
    NewEducacionComponent,
    NewSkillsComponent,
    NewProyectosComponent,
    EditarExperienciaComponent,
    EditarEducacionComponent,
    EditarProyectoComponent,
    EditSkillsComponent,
   
   
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgCirclesModule 
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
