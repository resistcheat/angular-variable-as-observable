import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private commonService: CommonService) { }
  items: any;
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.commonService.items$.subscribe(items => this.items = JSON.stringify(items));
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}
