import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-spline-chart',
  templateUrl: './spline-chart.component.html',
  styleUrls: ['./spline-chart.component.css']
})
export class SplineChartComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('chart') chartEl: ElementRef;
  private _chart: any;
  private randomValue() {
    return Math.floor(Math.random() * 10) + 0;
  }
  constructor() {
    const me = this;

    setInterval(function () {
      if (me._chart) {
        me._chart['series'][0].addPoint([(new Date()).getTime(), me.randomValue()], true, true);
      }
    }, 2000);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const opts: any = {
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
      },
      series: [{
        name: 'Random data',
        data: (function () {
          var data = [],
            time = (new Date()).getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: Math.floor(Math.random() * 10) + 0
            });
          }
          return data;
        }())
      }]
    };

    if (this.chartEl && this.chartEl.nativeElement) {
      opts.chart = {
        type: 'spline',
        renderTo: this.chartEl.nativeElement
      };

      this._chart = new Highcharts.Chart(opts);
    }
  }
  ngOnDestroy() {
    this._chart.destroy();
  }
}
