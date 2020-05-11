import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from '@seva/data-access';
import { IService } from '@seva/types';

interface IServiceAddForm {
  serviceName: string;
}

@Component({
  selector: 'ss-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {
  public addServiceForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private servicesService: ServicesService,
  ) {
    this.addServiceForm = this.formBuilder.group({
      serviceName: '',
    })
   }

  ngOnInit(): void {
  }

  onSubmit(value: IServiceAddForm) {
    const service: IService = {
      title: value.serviceName
    };
    this.servicesService.addService(service);
  }

}
