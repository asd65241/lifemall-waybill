import { BridgeService } from './../bridge.service';
import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  acceptFile = '.csv';
  isEmpty: false;
  csvFile: File;
  papaInput: Papa;
  dataArr: Array<any>;

  constructor(private papa: Papa, private _bridgeService: BridgeService) {
    this.papaInput = papa;
  }

  processArr() {
    for (let i = 1; i < this.dataArr.length - 1; i++) {
      if (this.dataArr[i]['Order Id'] != null) {
        this.dataArr[i]['Order Id'] = this.dataArr[i]['Order Id'].slice(1, -1);
        let dataNum: number;
        dataNum = Date.parse(this.dataArr[i]['Created Date'].slice(1, 11));
        this.dataArr[i]['Created Date'] = dataNum;
      }
    }
  }

  // Your applications input change listener for the CSV File
  fileChangeListener($event: any): void {
    // Select the files from the event
    this.csvFile = $event.target.files[0];
    this._bridgeService.fieldChange(this.isEmpty);
    // Papa Parse
    let options = {
      complete: (results, file) => {
        this.dataArr = results.data;
        this.processArr();
        this._bridgeService.updateProdArr(this.dataArr);
        console.log(this.dataArr);
      },
      header: true,
      dynamicTyping: true,
      error: (error) => {
        console.error(error);
      },
    };

    this.papaInput.parse(this.csvFile, options);
  }

  ngOnInit() {}
}
