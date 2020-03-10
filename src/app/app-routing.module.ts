import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { MyNavComponent } from './components/my-nav/my-nav.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';


const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch:'full' },
    {path: 'home', component: HomeComponent },
    {path: 'register', component: RegisterComponent },
    {path: 'my-nav', component: MyNavComponent },
    {path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
