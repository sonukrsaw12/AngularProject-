import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowHistoryComponent } from './show-history/display-history.component';
import { SearchimageComponent } from './searchimage/searchimage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; 
import { HistoryComponent } from './history/history.component';



const routes: Routes = [
  { path: 'history', component: ShowHistoryComponent }, 
  { path: 'searchImage', component: SearchimageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'historyView/:keyword', component: HistoryComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
