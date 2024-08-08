import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CacheResolverService {
  private cache = new Map<string, HttpResponse<any>>();

  constructor() {}

  set(key: any, value: any) {
    this.cache.set(key, value);
  }

  get(key: any) {
    const httpResponse = this.cache.get(key);

    if (!httpResponse) return null;

    return httpResponse;
  }
}
