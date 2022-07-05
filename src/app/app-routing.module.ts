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
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { AuthGuard } from './gaurd/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: "/login", pathMatch: 'full' },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgot', component: ForgetPasswordComponent},
  {path: 'resetpassword/:token', component:ResetPasswordComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate:[AuthGuard],
    children:[
      {path: 'notes', component:GetAllNotesComponent},
      {path: 'archive', component:ArchiveComponent},
      {path: 'trash', component:TrashComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
