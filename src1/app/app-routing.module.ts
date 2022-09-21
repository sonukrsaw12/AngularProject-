import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayHistoryComponent } from './display-history/display-history.component';
import { SearchimageComponent } from './searchimage/searchimage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; 
import { HistoryComponent } from './history/history.component';



const routes: Routes = [
  { path: 'history', component: DisplayHistoryComponent }, 
  { path: 'searchImage', component: SearchimageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'viewhis/:keyword', component: HistoryComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
