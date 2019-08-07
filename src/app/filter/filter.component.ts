import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common.service";
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  getData() {
    this.commonService.getData()
      .subscribe((data) => console.log(data));
  }

}
