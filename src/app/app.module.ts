import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// New imports:
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms'; // for template driven forms 
import { ReactiveFormsModule } from '@angular/forms';   // for reactive forms 
import { AgGridModule } from 'ag-grid-angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgxLoadingModule } from 'ngx-loading';
import { ProductComponent } from './product/product.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerGridComponent } from './customer-grid/customer-grid.component';
import { ControlsDemoComponent } from './controls-demo/controls-demo.component';
import { ControlsDemoGridComponent } from './controls-demo-grid/controls-demo-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductGridComponent,
    CustomerComponent,
    CustomerGridComponent,
    ControlsDemoComponent,
    ControlsDemoGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    AngularFireModule.initializeApp(environment.firebase),  
    AngularFirestoreModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
