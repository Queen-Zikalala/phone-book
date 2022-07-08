import { RouterModule } from '@angular/router';
import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddContactComponent } from './add-contact/add-contact.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ConfirmationComponent } from './confirmation/confirmation.component';


@NgModule({
    declarations: [HomeComponent, AddContactComponent, ConfirmationComponent],
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      TableModule,
      ButtonModule,
      InputTextModule,
      CardModule,
      NgxDatatableModule
      
    ],
    exports: [
        HomeComponent,
        AddContactComponent,
        ConfirmationComponent
    ]
  })
  export class ViewsModule { }