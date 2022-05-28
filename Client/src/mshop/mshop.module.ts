import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MshopRoutingModule } from './mshop-routing.module';
import { MshopDashboardComponent } from './mshop-dashboard/mshop-dashboard.component';
import { SidebarComponent } from './mshop-dashboard/sidebar/sidebar.component';
import { HeaderComponent } from './mshop-dashboard/header/header.component';
import { DashboardHomeComponent } from './dashboard-home/mshopdashboard-home.component';
import { UtilsModule } from 'src/utils/utils.module';
//import { ConsultationComponent } from './consultation/consultation.component';
import { FormsModule } from '@angular/forms';
//import { PatientRecordComponent } from './consultation/patient-record/patient-record.component';
import { ViewRecordComponent } from './view-record/view-record.component';
//import { MshopComponent } from 'src/admin/medical-shop/mshop.component';
import { RecordComponent } from './view-record/record/record.component';

@NgModule({
  declarations: [
    MshopDashboardComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardHomeComponent,
    //ConsultationComponent,
    //PatientRecordComponent,
    ViewRecordComponent,
    //MshopComponent,
    RecordComponent,

  ],
  imports: [CommonModule, FormsModule, MshopRoutingModule, UtilsModule],
})
export class MshopModule { }
