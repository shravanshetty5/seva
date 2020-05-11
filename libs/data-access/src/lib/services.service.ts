import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IService } from '@seva/types';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient
  ) { }

  getServiceList() {
    return this.http.get<IService[]>('/api/services');
  }

  addService(service: IService) {
    return this.http.post('/api/services', service);
  }
}
