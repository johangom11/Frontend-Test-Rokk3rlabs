import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './+core/not-found/not-found.component';
import { DashboardComponent } from './+core/dashboard/dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { NewsComponent } from './news/news.component';


const appRoutes: Routes = [

    {
        path: '', component: DashboardComponent, children: [
            { path: 'analytics', component: AnalyticsComponent },
            { path: 'news', component: NewsComponent },
            { path: '', redirectTo: 'analytics', pathMatch: 'full' }
        ]
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ], exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }