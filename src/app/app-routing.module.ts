import { SearchResultComponent } from './components/search-result/search-result.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';

const routes: Routes = [
  {path: '',  redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'ticket', component: BookingComponent},
  {path: 'result', component: SearchResultComponent},
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
