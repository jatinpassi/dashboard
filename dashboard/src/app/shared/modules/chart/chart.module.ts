import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { LineComponent } from 'src/app/shared/modules/chart/line/line.component';
import { BarComponent } from 'src/app/shared/modules/chart/bar/bar.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  declarations: [LineComponent, BarComponent, PieComponent],
  imports: [CommonModule, ChartsModule],
  exports: [LineComponent, BarComponent, ChartsModule, PieComponent],
})
export class ChartModule {}
