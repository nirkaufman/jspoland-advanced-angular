import {Injectable} from '@angular/core';

@Injectable()
export class ListService {

  private _items: any[];

  constructor() {
    this._items = []
  }

  public get items(): string[] {
    return this._items;
  }

  addItem(value) {
    this._items.push({title: value})
  }

}
