import { BridgeService } from './../bridge.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css'],
})
export class PrintComponent implements OnInit {
  order_list = [];
  selectedDate: number;

  constructor(private _bridgeService: BridgeService) {}

  ngOnInit(): void {
    this._bridgeService.selectDate.subscribe((dataStr) => {
      this.selectedDate = Date.parse(dataStr);
    });
    this._bridgeService.selectProd.subscribe((dataArr) => {
      this.order_list = dataArr;
    });
  }
}
