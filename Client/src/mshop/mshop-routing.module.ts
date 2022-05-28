import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ConsultationComponent } from './consultation/consultation.component';
import { DashboardHomeComponent } from './dashboard-home/mshopdashboard-home.component';
import { MshopDashboardComponent } from './mshop-dashboard/mshop-dashboard.component';
import { ViewRecordComponent } from './view-record/view-record.component';

const routes: Routes = [
  {
    path: '',
    component: MshopDashboardComponent,
    children: [
      { path: 'mshop-dashboard', component: DashboardHomeComponent },
      //{ path: 'consult', component: ConsultationComponent },
      { path: 'view-record', component: ViewRecordComponent }
    ],
  },
  // {
  //   path: '',
  //   component: MshopDashboardComponent,
  //   redirectTo: 'doctor/consult',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MshopRoutingModule { }
