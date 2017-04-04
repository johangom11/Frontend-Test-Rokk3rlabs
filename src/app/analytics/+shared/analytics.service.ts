import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AnalyticsService {

    barDataListener: (labels: string[], data: number[]) => void;
    lineDataListener: (labels: string[], data: any[]) => void;
    pieDataListener: (labels: string[], data: number[]) => void;

    data;
    interval: any;

    constructor(private http: Http) {
        this.data = {};
    }

    loadChartsData() {
        this.interval = setInterval(() => {
            this.getChartsData();
        }, 5000);
    }

    stopLoadChartsData() {
        clearInterval(this.interval);
    }

    private getChartsData() {
        this.http.get('assets/data/activity-data.json').map(this.processData).catch(this.processError).subscribe((body) => {
            for (const zone of body) {
                if (this.data[zone.zoneId] == undefined) {
                    this.data[zone.zoneId] = [zone.data];
                } else {
                    this.data[zone.zoneId].push(zone.data);
                }
            }

            this.processChartData();
        });
    }

    private processData(response: Response) {
        const body = response.json();
        return body;
    }

    private processError() {

        return Observable.throw(null);
    }

    private processChartData() {
        const labels = [];
        const dataBar = [];
        const dataPie = [];
        const dataLine = [];

        let j = 0;

        for (const key in this.data) {
            if (this.data.hasOwnProperty(key)) {
                labels.push(key);
                const values = this.data[key];
                dataBar.push(values[values.length - 1].count);

                const line = {
                    label: key, data: [],
                    borderColor: this.getColor(j)
                };
                let speed = 0;
                for (const value of values) {
                    line.data.push({ x: value.time, y: value.speed });
                    speed += value.speed;
                }
                speed = speed / values.length;
                dataLine.push(line);
                dataPie.push(speed);
                j++;
            }

        }

        if (this.barDataListener) {
            this.barDataListener(labels, dataBar);
        }
        if (this.lineDataListener) {
            this.lineDataListener(labels, dataLine);
        }
        if (this.pieDataListener) {
            this.pieDataListener(labels, dataPie);
        }
    }

    getColor(index: Number) {

        switch (index) {
            case 0: return "#FF6384";
            case 1: return "#36A2EB";
            case 2: return "#FFCE56";
            case 3: return "#FF8AC9";
            case 4: return "#B3FF7E";
            case 5: return "#728DE8";
            case 6: return "#E8BB72";
            case 7: return "#FF3F39";
        }
    }
}