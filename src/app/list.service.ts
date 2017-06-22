import {Injectable} from '@angular/core';

export class Item {
  public title: string;
  public completed: boolean;

  constructor(title: string, completed: boolean = false) {
    this.title     = title;
    this.completed = completed;
  }
}

@Injectable()
export class ListService {

  private _items: any[];

  constructor() {
    this._items = []
  }

  public set items(value: any[]) {
    this._items = value;
  }

  public get items(): any[] {
    return this._items;
  }

  addItem(value) {
    this._items.push(new Item(value, true));
    // this._items = [...this._items, new Item(value)];
  }

}
