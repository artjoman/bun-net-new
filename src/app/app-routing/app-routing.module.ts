import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { FirstComponent } from '../components/first/first.component';
import { NotFoundComponent } from '../components/system/not-found/not-found.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent, data: { title: 'Welcome' } },
  { path: 'first', component: FirstComponent, data: { title: 'My First Component' } },
  { path: '**', component: NotFoundComponent, data: { title: '404 - Page Not Found' } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
