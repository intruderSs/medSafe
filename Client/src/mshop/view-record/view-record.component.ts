import { Component, OnInit } from "@angular/core";
import { MshopService } from "../services/mshop.service";

@Component({
  selector: "app-view-record",
  templateUrl: "./view-record.component.html",
  styleUrls: ["./view-record.component.sass"],
})
export class ViewRecordComponent implements OnInit {
  model: any = { patID: "0x57e1b9C8879B2014D6413b048F1585B17165cFAB" };
  PatientRecords: any;
  PatientDetails: any = [];
  record: boolean = false;

  PatientRecord: any = [];

  showProgress: boolean = false;
  progressMsg: string = "Loading....";
  progressWarn: boolean = false;
  progressSuccess: boolean = false;
  viewRecord: boolean = false;
  editRecord: boolean = false;

  progressBtnTxt: string = '<i class="fas fa-trash "></i> &nbsp Delete';
  index: number = 0;

  constructor(private mshopService: MshopService) { }

  ngOnInit(): void {
    this.PatientRecords = [];
  }

  onPatIDSubmit() {
    this.showProgress = true;
    this.mshopService
      .getPatientRecords(this.model.patID)
      .then((result: any) => {
        console.log(result);
        this.record = true;
        this.progressSuccess = true;
        this.PatientRecords = result["MedRecord"];
        // localStorage.setItem("PatRecord", JSON.stringify(this.PatientRecords));
        console.log(this.PatientRecords);

        this.progressMsg =
          '<span class="text-danger fw-bold">' +
          this.PatientRecords.length +
          " </span> Record Found";
      })
      .catch((err: any) => {
        console.log(err);
        this.progressWarn = true;
        this.progressMsg =
          'Not Found a Record for Patient with <br> <span class="text-danger">' +
          this.model.patID;
      });
  }

  onProgressClose() {
    this.showProgress = false;
    this.progressWarn = false;
    this.progressSuccess = false;
    this.progressMsg = "Loading...!";
  }

  onViewRecord(record: any) {
    this.PatientRecord = record;
    console.log(this.PatientRecord.data);
    this.viewRecord = true;
  }






  onRecordClose() {
    this.PatientRecord = {};
    this.viewRecord = false;
  }
}
