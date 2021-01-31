import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
})
export class PieComponent implements OnInit {
  constructor(private dataService: DataService) {}

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors: Color[] = [
    {
      backgroundColor: [],
    },
  ];

  ngOnInit(): void {
    this.dataService.getPie();

    this.dataService.pieObserable$
      .pipe(
        tap(() => {
          this.pieChartData = [];
          this.pieChartLabels = [];
        })
      )
      .subscribe((data) => {
        let colorArr: any = [];
        data.map((ele: any) => {
          this.pieChartData.push(ele.data);
          this.pieChartLabels.push(ele.quarter);
          let o = Math.round,
            r = Math.random,
            s = 255;
          colorArr.push(
            'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',0.5)'
          );
        });
        this.pieChartColors = [
          {
            backgroundColor: colorArr,
          },
        ];
      });
  }
}
