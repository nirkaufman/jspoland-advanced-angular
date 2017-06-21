import { Injectable } from '@angular/core';
import {Http} from '@angular/http';



@Injectable()
export class NetworkService {
  private BASE_URL: string;
  private http: Http;

  constructor(base_url: string, http: Http) {
    this.http = http;
    this.BASE_URL = base_url
  }

  get() {
    console.log(this.BASE_URL);
    return 'data';
  }

}
