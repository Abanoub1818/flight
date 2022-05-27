import { DropdownModule } from 'primeng/dropdown';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule }   from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule, MediaMatcher } from '@angular/cdk/layout';
import { PanelModule } from "primeng/panel";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TableModule } from 'primeng/table';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio'
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import {BlockUIModule} from 'primeng/blockui';
import {DialogModule} from 'primeng/dialog';

import { NgSelectModule } from '@ng-select/ng-select';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToastModule} from 'primeng/toast';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { PaginatorModule } from "primeng/paginator";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    SearchResultComponent,



  ],
  imports: [
    DropdownModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    PanelModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    TableModule,
    MatTabsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatSelectCountryModule.forRoot('en'),
    NgSelectModule,
    BlockUIModule,
    ProgressSpinnerModule,
    PaginatorModule,
    DialogModule,
    ToastModule

  ],
  providers: [MatNativeDateModule,ConfirmationService,MessageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
