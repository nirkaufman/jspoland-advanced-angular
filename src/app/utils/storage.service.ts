import {LoggerService} from './logger.service';

export class StorageService {
  protected logger: LoggerService;

  constructor() {
    console.log('logger');
  }

  save(key: string, value: any) {
    this.logger.log('StorageService');
    localStorage.setItem(key, JSON.stringify(value))
  }
}