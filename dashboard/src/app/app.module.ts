import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from 'src/app/app-routing.module';

import { AppComponent } from 'src/app/app.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { NavigationComponent } from 'src/app/shared/components/navigation/navigation.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule } from './shared/modules/chart/chart.module';
import { DataComponent } from './data/data.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    NgbModule,
    ChartModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
