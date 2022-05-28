import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MshopService } from '../services/mshop.service';

@Component({
  selector: 'app-mshop-dashboard',
  templateUrl: './mshop-dashboard.component.html',
  styleUrls: ['./mshop-dashboard.component.sass'],
})
export class MshopDashboardComponent implements OnInit {
  isShop: boolean = false;

  isCollapse: boolean = false;

  checkProgress: boolean = true;
  progressWarn: boolean = false;
  progressMsg: string = 'Checking Shop List....';

  constructor(private router: Router, private mshopService: MshopService) {

    router.navigate(['/mshop/mshop-dashboard']);
  }

  ngOnInit(): void {
    this.checkShop()
  }

  checkShop() {
    this.mshopService
      .checkIsShop()
      .then((r) => {
        console.log(r);
        if (r) {
          this.isShop = true;
        }
      })
      .catch((err: any) => {
        this.progressWarn = true;
        this.progressMsg = 'Only Medical Shops only have acess to this page...';
      });
  }

  // onCheckDoctor() {
  //   this.checkProgress = true;
  //   this.progressWarn = false;
  //   this.progressMsg = 'Checking Doctor....';

  //   var count = 0;

  //   let checkDr = setInterval(() => {
  //     this.mshopService.checkisDr();
  //     if (this.mshopService.checkComplete) {
  //       if (this.mshopService.isDoctor) {
  //         this.isDoctor = true;
  //       } else {
  //         this.progressWarn = true;
  //         this.progressMsg = 'Only Doctors have acess to this page...';
  //       }
  //       clearInterval(checkDr);
  //     }

  //     if (count >= 50) {
  //       clearInterval(checkDr);
  //     }
  //     count++;
  //   }, 1000);
  // }
}
