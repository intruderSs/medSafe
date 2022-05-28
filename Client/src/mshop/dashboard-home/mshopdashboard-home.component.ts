import { Component, OnInit } from '@angular/core';
import { MshopService } from '../services/mshop.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './mshopdashboard-home.component.html',
  styleUrls: ['./mshopdashboard-home.component.sass'],
})
export class DashboardHomeComponent implements OnInit {
  MshopDetails: any = {
    shopID: '',
    fName: 'First Name',
    lName: 'Last Name',
    Doj: '',
    emailID: 'test_name@mail.com',
    phone: '123456789',
    city: 'city',
    state: 'state',
    speciality: 'speciality',
    imageHash: null,
  };

  Appointments: any = []
  constructor(private mshopService: MshopService) {
    this.MshopDetails = [];
  }

  ngOnInit(): void {
    this.getMshop();

  }

  getMshop() {
    this.mshopService.getMshop().then((data: any) => {
      console.log(data);

      this.MshopDetails = data[0];
    });
  }


}
