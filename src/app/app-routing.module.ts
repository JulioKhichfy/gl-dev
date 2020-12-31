import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyGoldenLayoutCoresComponent } from './my-golden-layout-cores/my-golden-layout-cores.component';

const routes: Routes = [
  { path: 'golden', component: MyGoldenLayoutCoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
