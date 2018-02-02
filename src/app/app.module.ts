import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import{SendEmailService} from './services/send-email.service'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { IamComponent } from './iam/iam.component';
import { ProjectComponent } from './project/project.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {RouterRoutingModule} from './router/router-routing.module';
import { NavigatorComponent } from './navigator/navigator.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, 
  MatExpansionModule, MatDatepickerModule, MatInputModule, MatTabsModule, 
  MatTooltipModule, MatFormFieldModule, MatMenuModule, MatSnackBarModule} from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    WorkComponent,
    IamComponent,
    ProjectComponent,
    NotfoundComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterRoutingModule,
    HttpClientModule,
    [BrowserAnimationsModule],
    [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatMenuModule, 
      MatExpansionModule, MatInputModule, MatTabsModule, MatTooltipModule, MatFormFieldModule,
      MatSnackBarModule]
  ],
  providers:[SendEmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
