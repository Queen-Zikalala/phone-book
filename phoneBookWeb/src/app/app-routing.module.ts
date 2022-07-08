import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneBookResolver } from './core/resolver/phone-book.resolver';
import { AddContactComponent } from './views/add-contact/add-contact.component';
import { ConfirmationComponent } from './views/confirmation/confirmation.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path:'',
   component:HomeComponent,
   resolve:{
    phoneBook:PhoneBookResolver
   }
  },
  {
    path:'add-contact',
    component:AddContactComponent
  },
  {
    path:'confirmation',
    component:ConfirmationComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
