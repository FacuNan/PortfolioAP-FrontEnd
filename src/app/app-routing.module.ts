import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeMiComponent } from './componentes/acerca-de-mi/acerca-de-mi.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { EditarPerfilComponent } from './componentes/formularios/editar-perfil/editar-perfil.component';
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
        component: LoginComponent

      },

      {
        path: 'editarPerfil',
        component: EditarPerfilComponent,
        canActivate: [AuthGuard]
    
      }



    ]

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
