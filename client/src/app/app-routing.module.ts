import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoughComponent } from './rough/rough.component';

const routes: Routes = [
  {path:'rough',component:RoughComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
