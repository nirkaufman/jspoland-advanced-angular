import {StorageService} from './storage.service';
import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {
  private logs: string[];

  constructor() {
    this.logs = [];
  }

  public log(value: string) {
    this.logs.push(value);
    console.log(value);
  }

}