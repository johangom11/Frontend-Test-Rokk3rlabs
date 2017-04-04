import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './+core/core.module';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { BarComponent } from './analytics/charts/bar.component';
import { PieComponent } from './analytics/charts/pie.component';
import { LineComponent } from './analytics/charts/line.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    AnalyticsComponent,
    BarComponent,
    PieComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
