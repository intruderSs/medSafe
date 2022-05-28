import { Component, OnInit } from "@angular/core";
import { MshopService } from "src/admin/services/mshop.service";

@Component({
  selector: "mshop-view",
  templateUrl: "./mshopview.component.html",
  styleUrls: ["./mshopview.component.sass"],
})
export class MshopViewComponent implements OnInit {
  model: any = {
    acID: "",
  };

  Mshops: string[] = [];

  Mshop: any = {
    shopID: "",
    fName: "First Name",
    lName: "Last Name",
    Doj: "",
    emailID: "test_name@mail.com",
    phone: "123456789",
    city: "city",
    state: "state",
    department: "speciality",
    image: "",
  };

  MshopDetails: any = [this.Mshop];

  loaded: boolean = false;
  loadComplete: boolean = false;

  showProgressCard: boolean = false;
  showProgressWarn: boolean = false;
  progressMsg: string = "";

  showCard: any;
  showWarn: any;
  showSuccess: any;
  progressTxt: any;
  buttonTxt: any;
  shopId: any;
  shopAdrr: any;

  constructor(private mshopService: MshopService) {
    this.progressMsg = "Loading Mshop Accounts From Blockchain";

    this.MshopDetails = mshopService.MshopDetails;
  }

  ngOnInit(): void {
    this.getMshops();
  }

  loadShopDetails() {
    this.getMshops();
  }

  getMshops() {
    this.showProgressCard = true;
    this.showProgressWarn = false;
    this.progressMsg = "Loading....";

    this.MshopDetails = [];
    this.Mshops = this.mshopService.Mshops;
    // this.progressMsg = 'Found ' + this.Mshops.length + ' Accounts';
    this.mshopService.getMshops().subscribe((data: any) => {
      console.log(data);
      let Mshops = data;
      this.MshopDetails = Mshops.data;
      this.showProgressCard = false;
      this.loadComplete = true;
      this.loaded = true;
    });
  }

  onDeleteMshop(shopId: any, shopAdrr: any) {
    this.showCard = true;
    this.showWarn = true;
    this.progressTxt =
      "Are you sure you want to delete the Medical shop from the Network.";
    this.buttonTxt = '<i class="fas fa-trash "></i> &nbsp Delete';
    this.shopId = shopId;
    this.shopAdrr = shopAdrr
  }

  delete() {
    this.showWarn = false;
    this.progressTxt = "Deleting Medical shop....";
    this.mshopService.deleteMshop(this.shopId, this.shopAdrr).then((data: any) => {
      if (data) {
        this.progressTxt = "Medical shop Deleted from Network";
        this.showSuccess = true;
        this.getMshops()
      }
    });
  }

  cardClose() {
    this.showCard = false;
    this.showWarn = false;
    this.showSuccess = false;
  }
}
