import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { SplineChartComponent } from './spline-chart/spline-chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChartsComponent,
    BubbleChartComponent,
    SplineChartComponent,
],
exports: [
  SplineChartComponent,
  BubbleChartComponent,
]
})
export class ChartsModule { }
