import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  data: any;
  private items: BehaviorSubject<any> = new BehaviorSubject<any>(this.data);
  items$: Observable<any> = this.items.asObservable();
  constructor(private http: HttpClient) { }
  getData() {
    this.data = this.http.get('https://jsonplaceholder.typicode.com/todos/1');
    this.items.next(this.data);
    return this.data;
  }
}
