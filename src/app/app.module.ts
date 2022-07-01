import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { IconsComponent } from './components/icons/icons.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    GetAllNotesComponent,
    CreateNoteComponent,
    DisplayNoteComponent,
    IconsComponent,
    ArchiveComponent,
    TrashComponent,
    UpdateNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
