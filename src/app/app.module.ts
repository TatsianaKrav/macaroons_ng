import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductService} from "./services/product.service";
import { BenefitComponent } from './components/benefit/benefit.component';
import { ProductComponent } from './components/product/product.component';
import { BtnEffectDirective } from './directives/btn-effect.directive';
import { CutTextPipe } from './pipes/cut-text.pipe';
import { FormatPhonePipe } from './pipes/format-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BenefitComponent,
    ProductComponent,
    BtnEffectDirective,
    CutTextPipe,
    FormatPhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
