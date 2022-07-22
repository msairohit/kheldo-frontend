import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './kheldo/home/home.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'home', component: HomeComponent },
  {path: 'game1', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
