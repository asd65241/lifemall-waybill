import { BridgeService } from './../bridge.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  loadFile = false;

  constructor(private _bridgeService: BridgeService) {}

  ngOnInit(): void {
    this._bridgeService.dataFilled.subscribe((isEmpty) => {
      this.loadFile = isEmpty;
    });
  }
}
