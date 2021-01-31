import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {
  constructor(private dataService: DataService) {}

  public barChartOptions: ChartOptions = {
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
  public barChartLabels: Label[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Series A' },
    { data: [], label: 'Series B' },
  ];
  ngOnInit(): void {
    this.dataService.getBar();

    this.dataService.barObserable$
      .pipe(
        tap(() => {
          this.barChartData[0].data = [];
          this.barChartData[1].data = [];
          this.barChartLabels = [];
        })
      )
      .subscribe((data) => {
        let colorArr: any[] = [];
        let data1: any[] = [];
        let data2: any[] = [];
        data.map((ele: any) => {
          data1.push(ele.data1);
          data2.push(ele.data2);
          this.barChartLabels.push(ele.year);
          let o = Math.round,
            r = Math.random,
            s = 255;
          colorArr.push(
            'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',0.5)'
          );
        });
        this.barChartData[0].data = data1;
        this.barChartData[1].data = data2;
      });
  }
}
