import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnalyticsService } from './+shared/analytics.service';

@Component({
    templateUrl: './analytics.component.html',
    providers: [AnalyticsService]
})
export class AnalyticsComponent implements OnInit, OnDestroy {

    constructor(private service: AnalyticsService) { }

    ngOnInit() {
        this.service.loadChartsData();
    }

    ngOnDestroy() {
        this.service.stopLoadChartsData();
    }

}
