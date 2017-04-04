import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../+shared/analytics.service';

declare var $: any;
declare var Chart: any;

@Component({
    selector: 'app-line',
    templateUrl: './line.component.html'
})
export class LineComponent implements OnInit {

    labels: string[];
    data: number[];
    dataSet: any;
    chart: any;

    constructor(private service: AnalyticsService) { }

    ngOnInit() {
        const bar = $('#line');
        this.dataSet = {
            labels: [],
            datasets: [
                {
                    label: 'Speed Zones',
                    borderWidth: 1,
                    data: [],
                }
            ]
        };

        this.chart = new Chart(bar, {
            type: 'line',
            data: this.dataSet
        });

        this.service.lineDataListener = (labels, data) => {
            this.labels = labels;
            this.data = data;
            this.updateChart();
        };
    }

    updateChart() {
        this.dataSet.datasets = this.data;
        this.dataSet.labels = this.labels;
        this.chart.update();
    }
}
