import { Injectable } from '@nestjs/common';
import { IService } from '@seva/types';

@Injectable()
export class AppService {
  servicesOffered: IService[] = [
    { title: 'Service 1'},
    { title: 'Service 2'}
  ];

  getServicesList() {
    return this.servicesOffered;
  }

  addServices(service: IService) {
    this.servicesOffered.push(service);
    return 'service added';
  }
}
