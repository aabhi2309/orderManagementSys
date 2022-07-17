import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginPageComponent } from './component/loginPage/loginPage.component';
import { NewOrderComponent } from './component/newOrder/newOrder.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path:"",redirectTo:"/login",pathMatch:"full"},
  { path:"login", component:LoginPageComponent},
  { path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
  { path:"new-order",component:NewOrderComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
