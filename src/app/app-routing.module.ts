import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PiechartComponent } from './piechart/piechart.component';
import { MyAccountComponent } from './my-account/my-account.component';

const routes: Routes = [ {
  path: 'piechart',
  component: PiechartComponent
}, {
  path: 'myAccount',
  component: MyAccountComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
