import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SearchImageService } from './services/searchimage.service';
import { ShowHistoryComponent } from './show-history/display-history.component';
import { SearchimageComponent } from './searchimage/searchimage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent, 
    ShowHistoryComponent,
    SearchimageComponent,
    NavbarComponent,
    LoginComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ SearchImageService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
