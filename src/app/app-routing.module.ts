import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './modules/home/home.module';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import(`./modules/home/home.module`).then(m => HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
