import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ServicesService } from '@seva/data-access';
import { IService } from '@seva/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'ss-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesListComponent implements OnInit {
  public services$: Observable<IService[]>;
  constructor(
    private servicesService: ServicesService,
  ) {
    // this.services = [
    //   { title: 'Service 1' },
    //   { title: 'Service 2' },
    //   { title: 'Service 3' },
    // ]

    this.services$ = this.servicesService.getServiceList();
  }

  ngOnInit(): void {
  }

  selectService(service: IService ) {
    console.log(service);
  }

}
