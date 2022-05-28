import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { rejects } from "assert";
import { resolve } from "dns";
import { Observable } from "rxjs";
import { BlockchainService } from "src/services/blockchain.service";
import { IpfsService } from "src/services/ipfs.service";

@Injectable({
  providedIn: "root",
})
export class MshopService {
  web3: any;
  contract: any;
  account: any;

  isMshop: boolean = false;
  Mshops: any = [];
  checkComplete: boolean = false;

  MshopDetails: any = {};

  PatientDetails: any = {};
  patientId: string = "";

  ipfs: any;

  Appointments: any = [];

  constructor(
    private blockchainService: BlockchainService,
    private ipfsService: IpfsService,
    private http: HttpClient
  ) {
    this.web3 = blockchainService.getWeb3();
    this.contract = blockchainService.getContract();
    this.account = blockchainService.getAccount();

    this.ipfs = ipfsService.getIPFS();
  }

  async getMshop(): Promise<any> {
    return new Promise((resolve, reject) => {
      let check = setInterval(() => {
        if (this.account != "undefined") {
          this.http
            .get(
              "http://localhost:8000/api/mshop/" +
              this.blockchainService.account + "/"
            )
            .subscribe((result: any) => {
              resolve(result.data);
              clearInterval(check);
            });
        }
      }, 1000);
    });
  }

  async checkIsPatient(id: string): Promise<any> {
    this.patientId = id;
    console.log(id);
    return new Promise((resolve, reject) => {
      this.blockchainService
        .getContract()
        .then((r: any) => {
          this.contract = r;
          this.contract.methods
            .isPat(id)
            .call()
            .then((result: any) => {
              console.log(result);
              resolve(result);
            })
            .catch((err: any) => {
              console.log(err);
              reject(err);
            });
        })
        .catch((err: any) => {
          console.log(err);
        });
    });
  }

  async getPatientDetails(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.contract.methods
        .getPatInfo(id)
        .call()
        .then((result: any) => {
          console.log(result);
          this.http
            .get("https://ipfs.infura.io/ipfs/" + result)
            .subscribe((data: any) => {
              console.log(data);
              resolve(data);
            });
        })
        .catch((err: any) => {
          console.log(err);
          reject(err);
        });
    });
  }

  async getPatientRecords(id: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.blockchainService.getContract().then((r: any) => {
        this.contract = r;
        this.contract.methods
          .viewMedRec(id)
          .call()
          .then((result: any) => {
            console.log(result);
            if (result.length >= 1) {
              this.http
                .get("https://ipfs.infura.io/ipfs/" + result)
                .subscribe((data: any) => {
                  console.log(data);
                  resolve(data);
                });
            } else {
              resolve(null);
            }
          })
          .catch((err: any) => {
            console.log(err);
            reject(err);
          });
      });
    });
  }

  async checkIsShop(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.blockchainService.getContract().then((contract: any) => {
        contract.methods
          .isMshop(this.blockchainService.account)
          .call()
          .then((result: any) => {
            console.log(result);
            resolve(1);
          })
          .catch((err: any) => {
            console.log(err);
            reject(null);
          });
      });
    });
  }


}
