import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeMiComponent } from './componentes/acerca-de-mi/acerca-de-mi.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { EditarPerfilComponent } from './componentes/formularios/editar-perfil/editar-perfil.component';
import { EditarEducacionComponent } from './componentes/formularios/FormulariosEducacion/editar-educacion/editar-educacion.component';
import { NewEducacionComponent } from './componentes/formularios/FormulariosEducacion/new-educacion/new-educacion.component';
import { EditarExperienciaComponent } from './componentes/formularios/FormulariosExperiencia/editar-experiencia/editar-experiencia.component';
import { NewExperienciaComponent } from './componentes/formularios/FormulariosExperiencia/new-experiencia/new-experiencia.component';
import { EditarProyectoComponent } from './componentes/formularios/FormulariosProyecto/editar-proyecto/editar-proyecto.component';
import { NewProyectosComponent } from './componentes/formularios/FormulariosProyecto/new-proyectos/new-proyectos.component';
import { LoginComponent } from './componentes/formularios/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home/perfil'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'perfil',
        component: PerfilComponent,

      },
      {
        path: 'biografia',
        component: AcercaDeMiComponent
      },
      {
        path: 'educacion',
        component: EducacionComponent
      },
      {
        path: 'experiencia',
        component: ExperienciaComponent
      },
      {
        path: 'proyectos',
        component: ProyectosComponent
      },

      {
        path: 'skills',
        component: SkillsComponent

      },

      {
        path: 'contacto',
        component: ContactosComponent
      },

      {
        path: 'footer',
        component: FooterComponent,

      },

      {
        path: 'login',
        component: LoginComponent,


      },

      {
        path: 'editarPerfil/:id',
        component: EditarPerfilComponent,
        canActivate: [AuthGuard]



      },
      {
        path: 'nuevaExperiencia',
        component: NewExperienciaComponent,
        canActivate: [AuthGuard]


      },
      {
        path: 'nuevaEducacion',
        component: NewEducacionComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'nuevoProyecto',
        component: NewProyectosComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'actualizarExperiencia/:id',
        component: EditarExperienciaComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'actualizarEducacion/:id',
        component: EditarEducacionComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'actualizarProyecto/:id',
        component: EditarProyectoComponent,
        canActivate:[AuthGuard]
      }



    ]

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
