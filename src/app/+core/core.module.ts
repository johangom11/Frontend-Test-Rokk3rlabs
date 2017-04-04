import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavAsideComponent } from './dashboard/nav-aside/nav-aside.component';

@NgModule({
    declarations: [
        DashboardComponent,
        NavAsideComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class CoreModule { }
