import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { DisplayNoteComponent } from './components/display-note/display-note.component'
import { ArchiveComponent } from './components/archive/archive.component'
import { TrashComponent } from './components/trash/trash.component'

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  // {path: 'reset', component: ResetPasswordComponent},
  {path: 'forgot', component: ForgetPasswordComponent},
  {path: 'resetpassword/:token', component:ResetPasswordComponent},
  {path: 'dashboard', component:DashboardComponent,
    children:[
      {path: 'dashboard/notes', component:DisplayNoteComponent},
      {path: 'dashboard/archive', component:ArchiveComponent},
      {path: 'dashboard/trash', component:TrashComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
