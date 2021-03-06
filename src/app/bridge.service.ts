import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BridgeService {
  private _dateinput = new BehaviorSubject<string>('');
  selectDate = this._dateinput.asObservable();

  private _productArr = new BehaviorSubject<Array<any>>([]);
  selectProd = this._productArr.asObservable();

  private _fileInputEmpty = new BehaviorSubject<boolean>(true);
  dataFilled = this._fileInputEmpty.asObservable();

  constructor() {}

  updateDate(dateInput: string) {
    this._dateinput.next(dateInput);
  }

  updateProdArr(dataInput: Array<any>) {
    this._productArr.next(dataInput);
  }

  fieldChange(dataInput: boolean) {
    this._fileInputEmpty.next(dataInput);
  }
}
