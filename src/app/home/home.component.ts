import { BridgeService } from './../bridge.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  currentDate = new FormControl(new Date());
  selectedDate = new Date();
  dateFromService: number;

  constructor(private _bridgeService: BridgeService) {}

  logDate = () => {
    //console.log('From Service', this.dateFromService);
  };

  updateDate(event: MatDatepickerInputEvent<Date>) {
    this.selectedDate = event.value;
    this._bridgeService.updateDate(this.selectedDate.toDateString());
    console.log('Date Selected: ', this.selectedDate);
  }

  ngOnInit() {
    this._bridgeService.selectDate.subscribe((dateStr) => {
      let date: number;
      date = Date.parse(dateStr);
      this.dateFromService = date;
    });

    this._bridgeService.updateDate(this.selectedDate.toDateString());
  }
}
