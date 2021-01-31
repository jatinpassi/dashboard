import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
})
export class LineComponent implements OnInit {
  constructor(private dataService: DataService) {}

  public lineChartData: ChartDataSets[] = [{ data: [], label: 'Year Sales' }];
  public lineChartLabels: Label[] = [];
  public lineChartColors: Color[] = [
    {
      borderColor: 'brown',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      labels: { fontColor: 'black' },
    },
    scales: {
      xAxes: [
        {
          ticks: { fontColor: 'black' },
          gridLines: { color: 'transparent' },
        },
      ],
      yAxes: [
        {
          ticks: { fontColor: 'black' },
          gridLines: { color: 'transparent' },
        },
      ],
    },
  };
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  ngOnInit(): void {
    this.dataService.getLine();
    this.dataService.lineObserable$
      .pipe(
        tap(() => {
          this.lineChartData[0].data = [];
          this.lineChartLabels = [];
        })
      )
      .subscribe((data) => {
        let data1: any[] = [];
        data.map((ele: any) => {
          this.lineChartLabels.push(ele.month);
          data1.push(ele.data);
        });
        this.lineChartData[0].data = data1;
        console.log(data1);
      });
  }
}
