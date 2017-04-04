import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../+shared/analytics.service';

declare var $: any;
declare var Chart: any;

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html'
})
export class BarComponent implements OnInit {

    labels: string[];
    data: number[];
    dataSet: any;
    chart: any;

    constructor(private service: AnalyticsService) {}

    ngOnInit() {
       const bar = $('#bar');
        this.dataSet = {
            labels: [],
            datasets: [
                {
                    label: 'Count By Zones',
                    borderWidth: 1,
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF8AC9",
                        "#B3FF7E",
                        "#728DE8",
                        "#E8BB72",
                        "#FF3F39",
                        "#00FFA5",

                    ],
                    data: [],
                }
            ]
        };

        this.chart = new Chart(bar, {
            type: 'bar',
            data: this.dataSet
        });

        this.service.barDataListener = (labels, data) => {
            this.labels = labels;
            this.data = data;
            this.updateChart();
        };
    }

    updateChart() {
        this.dataSet.datasets[0].data = this.data;
        this.dataSet.labels = this.labels;
        this.chart.update();
    }

}

