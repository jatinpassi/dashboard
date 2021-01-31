import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { delay, retryWhen, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private line: Array<{ _id: string; data: number; month: string }> = [];
  lineObserable$: Subject<
    Array<{ data: number; month: string; _id: string }>
  > = new Subject();
  private pie: Array<{ data: number; quarter: string; _id: string }> = [];
  pieObserable$: Subject<
    Array<{ data: number; quarter: string; _id: string }>
  > = new Subject();
  private bar: Array<{
    data1: number;
    data2: number;
    year: string;
    _id: string;
  }> = [];
  barObserable$: Subject<
    Array<{ data1: number; data2: number; year: string; _id: string }>
  > = new Subject();
  getPie() {
    this.http
      .get(`${environment.host}/pie`)
      .pipe(retryWhen((errors) => errors.pipe(delay(1000))))
      .subscribe((data: any) => {
        this.pie = data;
        this.pieObserable$.next(this.pie);
      });
  }
  getLine() {
    this.http
      .get(`${environment.host}/line`)
      .pipe(retryWhen((errors) => errors.pipe(delay(1000))))
      .subscribe((data: any) => {
        this.line = data;
        this.lineObserable$.next(this.line);
      });
  }
  getBar() {
    this.http
      .get(`${environment.host}/bar`)
      .pipe(retryWhen((errors) => errors.pipe(delay(1000))))
      .subscribe((data: any) => {
        this.bar = data;
        this.barObserable$.next(this.bar);
      });
  }
  removeLine(id: string) {
    this.http
      .post(`${environment.host}/line`, { payload: id })
      .subscribe(() => {
        this.line = this.line.filter((ele) => {
          return ele._id !== atob(id);
        });
        this.lineObserable$.next(this.line);
      });
  }

  removePie(id: string) {
    this.http.post(`${environment.host}/pie`, { payload: id }).subscribe(() => {
      this.pie = this.pie.filter((ele) => {
        return ele._id !== atob(id);
      });
      this.pieObserable$.next(this.pie);
    });
  }
  removeBar(id: string) {
    this.http.post(`${environment.host}/bar`, { payload: id }).subscribe(() => {
      this.bar = this.bar.filter((ele) => {
        return ele._id !== atob(id);
      });
      this.barObserable$.next(this.bar);
    });
  }
  constructor(private http: HttpClient) {}
}
