import {InjectionToken} from '@angular/core';

export abstract class Api {}

export const BASE_URL = new InjectionToken('api');

export abstract class UtilsServices {}
