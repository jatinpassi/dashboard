import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  pie: Observable<Array<{ data: number; quarter: string; _id: string }>>;
  line: Observable<Array<{ data: number; month: string; _id: string }>>;
  bar: Observable<
    Array<{ data1: number; data2: number; year: string; _id: string }>
  >;

  lineEdit: string[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getPie();
    this.dataService.getLine();
    this.dataService.getBar();
  }
  ngOnInit() {
    this.pie = this.dataService.pieObserable$;
    this.line = this.dataService.lineObserable$;
    this.bar = this.dataService.barObserable$;
  }
  removeLine(id: string) {
    this.dataService.removeLine(btoa(id));
  }
  removePie(id: string) {
    this.dataService.removePie(btoa(id));
  }
  removeBar(id: string) {
    this.dataService.removeBar(btoa(id));
  }
  editLine(id: string) {
    this.lineEdit.push(id);
  }
  editLine_remove(id: string) {
    this.lineEdit = this.lineEdit.filter((eleId) => {
      return eleId != id;
    });
  }
}
