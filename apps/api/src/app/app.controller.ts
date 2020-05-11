import { Body, Controller, Get, Post } from '@nestjs/common';
import { IService } from '@seva/types';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('services')
  getData() {
    return this.appService.getServicesList();
  }

  @Post('services')
  async addService(@Body() service: IService) {
    return this.appService.addServices(service);
  }
}
