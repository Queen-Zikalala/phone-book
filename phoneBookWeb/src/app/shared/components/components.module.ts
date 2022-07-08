import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent,
      LoaderComponent,
      AlertComponent,
    ],
    imports: [
      CommonModule,
      RouterModule
    ],
    exports: [
      HeaderComponent,
      FooterComponent,
      LoaderComponent,
      AlertComponent
    ]
  })
  export class ComponentsModule { }
  