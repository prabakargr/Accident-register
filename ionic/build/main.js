webpackJsonp([6],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_network_network__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environment_environment__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ArCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArCreatePage = /** @class */ (function () {
    function ArCreatePage(navCtrl, navParams, loadingCtrl, storage, alertCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.dateOfToday = new Date().toISOString().slice(0, 10);
        this.patientInformation = {};
        this.mlcInfo = {};
        this.examination = {};
        this.personBrought = {};
        this.uniqueNumber = "AR" + String(Date.now() + Math.floor(Math.random() * 10000));
        this.availOfRTA = false;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__environment_environment__["a" /* environment */].baseUrl;
        this.arCreateUrl = "/api/v1/accidentRegisters/addAR";
    }
    ArCreatePage.prototype.ionViewDidLoad = function () {
        this.currentForm = 1;
        this.getTitle();
        this.getcurrentUserHospital();
    };
    ArCreatePage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__landing_landing__["a" /* LandingPage */]);
    };
    ArCreatePage.prototype.alert = function (message) {
        var alert = this.alertCtrl.create({
            subTitle: message,
            buttons: ['OK']
        }).present();
        // setTimeout(() => alert.present(), 1000 / 1000);
        // setTimeout(() => alert.dismiss(), 2000 / 4);
    };
    ArCreatePage.prototype.loaderFunction = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please Wait...",
        });
    };
    ArCreatePage.prototype.goBack = function () {
        var _this = this;
        this.loaderFunction();
        this.loader.present();
        this.content.scrollToTop();
        var currentForm = this.currentForm - 1;
        if (currentForm == 1) {
            this.pageTittleName = "Patient Information";
        }
        else if (currentForm == 2) {
            this.pageTittleName = "MLC Information";
        }
        if (currentForm == 0) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__landing_landing__["a" /* LandingPage */]);
        }
        else {
            this.currentForm = currentForm;
        }
        setTimeout(function () {
            _this.loader.dismiss();
        }, 1000);
    };
    ArCreatePage.prototype.getTitle = function () {
        if (this.currentForm == 1) {
            this.pageTittleName = "Patient Information";
        }
    };
    ArCreatePage.prototype.getcurrentUserHospital = function () {
        this.currentUserHospital = JSON.parse(localStorage.getItem('currentUserHospital')).userDetails;
    };
    ArCreatePage.prototype.comman = function () {
        if (this.validateForm()) {
            this.alert("Please fill Mandatory* fields");
            return;
        }
        this.currentForm = 1 + this.currentForm;
        this.content.scrollToTop();
        if (this.currentForm == 1) {
            this.pageTittleName = "Patient Information";
        }
        else if (this.currentForm == 2) {
            this.pageTittleName = "MLC Information";
        }
        else if (this.currentForm == 3) {
            this.pageTittleName = "Examination Details";
        }
        if (this.currentForm === 2 || this.currentForm === 4) {
            this.createDetails();
        }
    };
    ArCreatePage.prototype.checkRTA = function (v) {
        var value = v;
        this.availOfRTA = value.some(function (x) { return x == "Road Traffic Accident"; });
        if (this.availOfRTA == false) {
            this.mlcInfo.patientPosition = 'No need';
            this.mlcInfo.patientType = 'No need';
            this.mlcInfo.vechileNumber = 'No need';
            this.mlcInfo.vechileType = 'No need';
        }
    };
    ArCreatePage.prototype.isInformedToPolice = function (v) {
        var data = v;
        if (data == "No") {
            this.mlcInfo.toWhom = "No One";
        }
    };
    ArCreatePage.prototype.vechileType = function (v) {
        var data = v;
        if (data == "Others/") {
            this.typeOfVechile = true;
        }
        else {
            this.typeOfVechile = false;
            this.mlcInfo.otherVechileType = '';
        }
    };
    ArCreatePage.prototype.patientType = function (v) {
        var data = v;
        if (data == "Others/") {
            this.typeOfPatientPosition = true;
        }
        else {
            this.typeOfPatientPosition = false;
            this.mlcInfo.otherPatientPosition = '';
        }
    };
    ArCreatePage.prototype.injuryType = function (v) {
        var data = v;
        if (data == "Others/") {
            this.typeOfInjury = true;
        }
        else {
            this.typeOfInjury = false;
            this.examination.otherTypeOfInjury = '';
        }
    };
    ArCreatePage.prototype.checkOut = function (v) {
        var data = v;
        if (data != "Referred Out") {
            this.examination.referralInstitutionType = 'No';
            this.examination.reasonforReferral = 'No';
        }
    };
    ArCreatePage.prototype.validateForm = function () {
        if (this.currentForm == 1) {
            if (!this.patientInformation.arrivalDate || !this.patientInformation.name ||
                !this.patientInformation.age || !this.patientInformation.gender) {
                return true;
            }
        }
    };
    ArCreatePage.prototype.createDetails = function () {
        var _this = this;
        this.loaderFunction();
        this.loader.present();
        var data = {
            'arNumber': this.uniqueNumber,
            'currentUserID': this.currentUserHospital._id,
            'patientInformation': this.patientInformation,
            'personBrought': this.personBrought,
            'mlcInformation': this.mlcInfo,
            'examinationDetails': this.examination,
            'hospitalDetails': this.currentUserHospital,
            'completed': this.currentForm == 4 ? true : false
        };
        if (!navigator.onLine) {
            this.storage.get('arLists').then(function (localdata) {
                if (localdata) {
                    if (Array.isArray(localdata)) {
                        localdata = localdata.filter(function (item) { return item.arNumber != data.arNumber; });
                        localdata.push(data);
                    }
                }
                else {
                    localdata = [data];
                }
                _this.storage.set('arLists', localdata).then(function (success) {
                    if (data.completed == true) {
                        _this.alertCtrl.create({
                            subTitle: 'Stored in Offline',
                            buttons: [
                                {
                                    text: 'OK',
                                    role: 'submit',
                                    handler: function () {
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__landing_landing__["a" /* LandingPage */]);
                                    }
                                },
                            ],
                        }).present();
                    }
                });
            });
            this.storage.set('arLists', JSON.stringify({ data: data }));
            this.loader.dismiss();
        }
        else {
            this.dataService.postData(this.baseUrl + this.arCreateUrl, data)
                .subscribe(function (res) {
                _this.loader.dismiss();
                if (res && res['status']) {
                    _this.alertCtrl.create({
                        subTitle: res['status'],
                        buttons: [
                            {
                                text: 'OK',
                                role: 'submit',
                                handler: function () {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__landing_landing__["a" /* LandingPage */]);
                                }
                            },
                        ],
                    }).present();
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ArCreatePage.prototype, "content", void 0);
    ArCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ar-create',template:/*ion-inline-start:"D:\IIT\IONIC\AR\src\pages\ar-create\ar-create.html"*/'<!--\n\n  Generated template for the ArCreatePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-2>\n\n          <ion-icon  (click)="goBack()" name="arrow-back"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-8>\n\n          <ion-title align="center">{{pageTittleName}}</ion-title>\n\n        </ion-col>\n\n        <ion-col col-2 align="right">\n\n          <ion-icon (click)="goHome()" name="home"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <div id="patientInfoForm" *ngIf="currentForm==1">\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <h6>Date & Time of Arrival</h6>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Select date & time *</ion-label>\n\n            <ion-datetime type="text" name="admissionDate" [(ngModel)]="patientInformation.arrivalDate"\n\n              max="{{dateOfToday}}" displayFormat="MMM DD, YYYY:HH:mm"></ion-datetime>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Patient Name *</ion-label>\n\n            <ion-input type="text" name="name" [(ngModel)]="patientInformation.name"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Age *</ion-label>\n\n            <ion-input type="number" name="age" [(ngModel)]="patientInformation.age"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Gender *</ion-label>\n\n            <ion-select interface="popover" name="gender" [(ngModel)]="patientInformation.gender">\n\n              <ion-option value="Male">Male</ion-option>\n\n              <ion-option value="Female">Female</ion-option>\n\n              <ion-option value="Transgender">Transgender</ion-option>\n\n              <ion-option value="Others">Others</ion-option>\n\n              <ion-option value="Unknown">Unknown</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Occupation</ion-label>\n\n            <ion-input type="text" name="occupation" [(ngModel)]="patientInformation.occupation"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Address</ion-label>\n\n            <ion-input type="text" name="doorNoStreet" [(ngModel)]="patientInformation.doorNoStreet"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n          <ion-col class="removePadding" col-12>\n\n              <ion-label stacked>Phone Number</ion-label> \n\n      </ion-col>\n\n        <ion-col col-3>\n\n            <ion-item class="removePaddingLeft">\n\n                <ion-input type="tel" readonly value="+91">+91</ion-input>\n\n              </ion-item>\n\n        </ion-col>\n\n        <ion-col col-9>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-input type="tel" name="phoneNumber" #phoneNumberPatient="ngModel"  minlength="10" maxlength="10" [(ngModel)]="patientInformation.phoneNumber" required></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <div *ngIf="phoneNumberPatient.errors && phoneNumberPatient.touched" class="alert text-danger">\n\n          <div [hidden]="!phoneNumberPatient.errors.required">\n\n              Enter  Phonenumber\n\n          </div>\n\n          <div [hidden]="!phoneNumberPatient.errors.minlength">\n\n                 Atleast 10 character\n\n          </div>     \n\n      </div>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <h6>Identification Marks</h6>\n\n          <ion-row>\n\n            <ion-col col-5>\n\n              <ion-item class="removePaddingLeft">\n\n                <ion-label stacked>Select Nature</ion-label>\n\n                <ion-select interface="popover" name="identyMark1" [(ngModel)]="patientInformation.identyMark1">\n\n                  <ion-option value="Mlackmole">Black Mole</ion-option>\n\n                  <ion-option value="Scar">Scar</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-7>\n\n              <ion-item class="removePaddingLeft">\n\n                <ion-label stacked>Location #1</ion-label>\n\n                <ion-input type="text" name="location1" [(ngModel)]="patientInformation.location1"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-5>\n\n              <ion-item class="removePaddingLeft">\n\n                <ion-label stacked>Select Nature</ion-label>\n\n                <ion-select interface="popover" name="identyMark2" [(ngModel)]="patientInformation.identyMark2">\n\n                  <ion-option value="Blackmole">Black Mole</ion-option>\n\n                  <ion-option value="Scar">Scar</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-7>\n\n              <ion-item class="removePaddingLeft">\n\n                <ion-label stacked>Location #2</ion-label>\n\n                <ion-input type="text" name="location2" [(ngModel)]="patientInformation.location2"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n          <ion-col col-12>\n\n            <h6>Details of the person brought</h6>\n\n            <ion-item class="removePaddingLeft">\n\n              <ion-label stacked>Name</ion-label>\n\n              <ion-input type="text" name="name" [(ngModel)]="personBrought.name"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row> \n\n            <ion-col class="removePadding" col-12>\n\n                <ion-label stacked>Phone Number</ion-label> \n\n        </ion-col>\n\n          <ion-col col-3>\n\n              <ion-item class="removePaddingLeft">\n\n                  <ion-input type="tel" readonly value="+91">+91</ion-input>\n\n                </ion-item>\n\n          </ion-col>\n\n          <ion-col col-9>\n\n            <ion-item class="removePaddingLeft">\n\n              <ion-input type="tel" minlength="10" #phoneNumberBrought="ngModel" maxlength="10" name="phoneNumber" [(ngModel)]="personBrought.phoneNumber" required></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <div *ngIf="phoneNumberBrought.errors && phoneNumberBrought.touched" class="alert text-danger">\n\n            <div [hidden]="!phoneNumberBrought.errors.required">\n\n                Enter  Phonenumber\n\n            </div>\n\n            <div [hidden]="!phoneNumberBrought.errors.minlength">\n\n                  Atleast 10 character\n\n            </div>     \n\n        </div>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-item class="removePaddingLeft">\n\n              <ion-label stacked>Relationship</ion-label>\n\n              <ion-input type="text" name="relationship" [(ngModel)]="personBrought.relationship"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-item class="removePaddingLeft">\n\n              <ion-label stacked>Address</ion-label>\n\n              <ion-textarea rows="3" type="text" name="address"\n\n                [(ngModel)]="personBrought.address"></ion-textarea>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n    </div>\n\n    <div id="mlcInfoForm"  *ngIf="currentForm==2">\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Informed to the police ?</ion-label>\n\n            <ion-select type="text" name="isInformedToPolice" (ionChange)="isInformedToPolice($event)" \n\n             [(ngModel)]="mlcInfo.isInformedToPolice"\n\n              interface="popover">\n\n              <ion-option value="Yes">Yes</ion-option>\n\n              <ion-option value="No">No</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 *ngIf="mlcInfo.isInformedToPolice==\'Yes\'">\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Police Officer Name?</ion-label>\n\n            <ion-input type="text" name="toWhom" [(ngModel)]="mlcInfo.toWhom"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Accident Location</ion-label>\n\n            <ion-input type="text" name="location" [(ngModel)]="mlcInfo.location"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Case Type</ion-label>\n\n            <ion-select [id]="\'entities\'+i"  multiple="true" (ionChange)="checkRTA($event,i)" name="caseType" [(ngModel)]="mlcInfo.caseType" cancelText="Cancel"\n\n              okText="Okay" >\n\n              <ion-option value="Accident">Accident</ion-option>\n\n              <ion-option value="Road Traffic Accident">Road Traffic Accident</ion-option>\n\n              <ion-option value="Assault">Assault</ion-option>\n\n              <ion-option value="Burns">Burns</ion-option>\n\n              <ion-option value="Poisoning">Poisoning</ion-option>\n\n              <ion-option value="Suicide">Suicide</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12 *ngIf="availOfRTA==true">\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Patient Type</ion-label>\n\n            <ion-select interface="popover" name="patientType" [(ngModel)]="mlcInfo.patientType">\n\n              <ion-option value="Driver">Driver</ion-option>\n\n              <ion-option value="PillionRider">Pillion Rider</ion-option>\n\n              <ion-option value="Passenger">Passenger</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12 *ngIf="availOfRTA==true">\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Vechile Type</ion-label>\n\n            <ion-select interface="popover" name="vechileType" [(ngModel)]="mlcInfo.vechileType" (ionChange)="vechileType($event)">\n\n              <ion-option value="Two wheeler">Two Wheeler</ion-option>\n\n              <ion-option value="Four wheeler">Four Wheeler</ion-option>\n\n              <ion-option value="Others/">Others</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="typeOfVechile==true">\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Enter Vechile Type</ion-label>\n\n            <ion-input type="text" name="otherVechileType" [(ngModel)]="mlcInfo.otherVechileType"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        </ion-row>\n\n      <ion-row *ngIf="availOfRTA==true">\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Vechile Number</ion-label>\n\n            <ion-input type="text" name="name" [(ngModel)]="mlcInfo.vechileNumber"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="availOfRTA==true">\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Patient Position</ion-label>\n\n            <ion-select interface="popover" name="patientPosition" [(ngModel)]="mlcInfo.patientPosition" (ionChange)="patientType($event)">\n\n              <ion-option value="Vechile1">Vechile 1</ion-option>\n\n              <ion-option value="Vechile2">Vechile 2</ion-option>\n\n              <ion-option value="Pedestrain">Pedestrain</ion-option>\n\n              <ion-option value="Others/">Others</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="typeOfPatientPosition==true">\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Enter Patient Type</ion-label>\n\n            <ion-input type="text" name="otherPatientPosition" [(ngModel)]="mlcInfo.otherPatientPosition"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Dying Declaration Needed ?</ion-label>\n\n            <ion-select type="text" name="isNeededDyingDeclaration" [(ngModel)]="mlcInfo.isNeededDyingDeclaration"\n\n              interface="popover">\n\n              <ion-option value="Yes">Yes</ion-option>\n\n              <ion-option value="no">No</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Statement Needed ?</ion-label>\n\n            <ion-select type="text" name="isNeededStatement" [(ngModel)]="mlcInfo.isNeededStatement"\n\n              interface="popover">\n\n              <ion-option value="Yes">Yes</ion-option>\n\n              <ion-option value="no">No</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n    <div id="examinationForm" *ngIf="currentForm==3">\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Nature of Injury</ion-label>\n\n            <ion-select interface="popover" name="natureOfInjury" [(ngModel)]="examination.natureOfInjury">\n\n              <ion-option value="Simple">Simple</ion-option>\n\n              <ion-option value="Grievous">Grievous</ion-option>\n\n              <ion-option value="Opinion Reserved">Opinion Reserved</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <ion-item class="removePaddingLeft">\n\n        <ion-label stacked>Type of Injury</ion-label>\n\n        <ion-select interface="popover" name="typeOfInjury"  [(ngModel)]="examination.typeOfInjury" (ionChange)="injuryType($event)">\n\n          <ion-option value="Abrasion">Abrasion</ion-option>\n\n          <ion-option value="Contusion">Contusion</ion-option>\n\n          <ion-option value="Laceration">Laceration</ion-option>\n\n          <ion-option value="Incised">Incised</ion-option>\n\n          <ion-option value="Chop">Chop</ion-option>\n\n          <ion-option value="Crush">Crush</ion-option>\n\n          <ion-option value="Fracture">Fracture</ion-option>\n\n          <ion-option value="Others/">Others</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-col>\n\n</ion-row>\n\n<ion-row *ngIf="typeOfInjury==true">\n\n<ion-col col-12>\n\n  <ion-item class="removePaddingLeft">\n\n    <ion-label stacked>Enter Injury Type</ion-label>\n\n    <ion-input type="text" name="otherTypeOfInjury" [(ngModel)]="examination.otherTypeOfInjury"></ion-input>\n\n  </ion-item>\n\n</ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12>\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>Injured Part of Body</ion-label>\n\n      <ion-select multiple="true" name="injuredPartOfBody" [(ngModel)]="examination.injuredPartOfBody" cancelText="Cancel"\n\n        okText="Okay">\n\n        <ion-option value="Head">Head</ion-option>\n\n        <ion-option value="Neck">Neck</ion-option>\n\n        <ion-option value="Larynx">Larynx</ion-option>\n\n        <ion-option value="Thyroid">Thyroid</ion-option>\n\n        <ion-option value="Upper Limbs">Upper Limbs</ion-option>\n\n        <ion-option value="Lower Limbs">Lower Limbs</ion-option>\n\n        <ion-option value="Chest">Chest</ion-option>\n\n        <ion-option value="Abdomen">Abdomen</ion-option>\n\n        <ion-option value="Pelvis">Pelvis</ion-option>\n\n        <ion-option value="Spine">Spine</ion-option>\n\n        <ion-option value="Genitalia">Genitalia</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12>\n\n    <h6>Physiological Response</h6>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item class="removePaddingLeft">\n\n          <ion-label stacked>Heart Rate</ion-label>\n\n          <ion-input type="number" name="heartRate" [(ngModel)]="examination.heartRate"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col class="removePadding" col-12>\n\n            <ion-label stacked>Blood Pressure</ion-label> \n\n    </ion-col>\n\n          <ion-col col-5>\n\n              <ion-item class="removePaddingLeft removePadding">\n\n              <ion-input type="number" name="bloodPressureHigh" \n\n              [(ngModel)]="examination.bloodPressureHigh">\n\n              </ion-input>\n\n              </ion-item>\n\n          </ion-col>\n\n          <ion-col col-2 class="sliter" align="center"><span>/</span></ion-col>\n\n          <ion-col col-5>\n\n              <ion-item class="removePaddingLeft removePadding">\n\n              <ion-input type="number" name="bloodPressureLow" \n\n              [(ngModel)]="examination.bloodPressureLow">\n\n              </ion-input>\n\n              </ion-item>\n\n          </ion-col>\n\n    </ion-row>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12>\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>Conscious</ion-label>\n\n      <ion-select type="text" name="conscious" [(ngModel)]="examination.conscious"\n\n        interface="popover">\n\n        <ion-option value="Yes">Yes</ion-option>\n\n        <ion-option value="No">No</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12>\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>Orientation</ion-label>\n\n      <ion-select type="text" name="orientation" [(ngModel)]="examination.orientation"\n\n        interface="popover">\n\n        <ion-option value="Oriented">Oriented</ion-option>\n\n        <ion-option value="Disoriented">Disoriented</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12>\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>Description of Pupil</ion-label>\n\n      <ion-select type="text" name="descriptionOfPupil" [(ngModel)]="examination.descriptionOfPupil"\n\n        interface="popover">\n\n        <ion-option value="Equal in Size">Equal in Size</ion-option>\n\n        <ion-option value="Not-Equal">Not-Equal</ion-option>\n\n        <ion-option value="Constricted">Constricted</ion-option>\n\n        <ion-option value="Dilated and Fixed">Dilated and Fixed</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12>\n\n    <!-- <h6>Physician Opinion</h6> -->\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>Physician Opinion</ion-label>\n\n      <ion-textarea rows="3" type="text" name="physicianOpinion"\n\n        [(ngModel)]="examination.physicianOpinion"></ion-textarea>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12>\n\n    <!-- <h6>History</h6> -->\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>History</ion-label>\n\n      <ion-textarea rows="3" type="text" name="history"\n\n        [(ngModel)]="examination.history"></ion-textarea>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12>\n\n    <!-- <h6>Treatment Plan</h6> -->\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>Treatment Plan</ion-label>\n\n      <ion-textarea rows="3" type="text" name="treatmentPlan"\n\n        [(ngModel)]="examination.treatmentPlan"></ion-textarea>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12>\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>Outcome</ion-label>\n\n      <ion-select type="text" name="outCome" [(ngModel)]="examination.outCome" (ionChange)="checkOut($event)"\n\n        interface="popover">\n\n        <ion-option value="Treated">Treated</ion-option>\n\n        <ion-option value="Admitted">Admitted</ion-option>\n\n        <ion-option value="Referred Out">Referred Out</ion-option>\n\n        <ion-option value="Expired">Expired</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row *ngIf="examination.outCome==\'Referred Out\'">\n\n  <ion-col col-12>\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>Referral Institution Type</ion-label>\n\n      <ion-select type="text" name="referralInstitutionType" [(ngModel)]="examination.referralInstitutionType"\n\n        interface="popover">\n\n        <ion-option value="Government">Government</ion-option>\n\n        <ion-option value="Private">Private</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12 *ngIf="examination.outCome==\'Referred Out\'">\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>Reason for Referral</ion-label>\n\n      <ion-select type="text" name="reasonforReferral" [(ngModel)]="examination.reasonforReferral"\n\n        interface="popover">\n\n        <ion-option value="Blood not Available">Blood not Available</ion-option>\n\n        <ion-option value="Specialist not Available">Specialist not Available</ion-option>\n\n        <ion-option value="Complicated">Complicated</ion-option>\n\n        <ion-option value="Facility not Available">Facility not Available</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n\n\n    </div>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <button *ngIf="currentForm<=2" ion-button full (click)="comman()" align="center">Next</button>\n\n</ion-footer>\n\n<ion-footer>\n\n<button *ngIf="currentForm==3"  ion-button full (click)="comman()"   align="center">Create</button>\n\n</ion-footer>'/*ion-inline-end:"D:\IIT\IONIC\AR\src\pages\ar-create\ar-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_network_network__["a" /* NetworkProvider */]])
    ], ArCreatePage);
    return ArCreatePage;
}());

//# sourceMappingURL=ar-create.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_network_network__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ArEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArEditPage = /** @class */ (function () {
    function ArEditPage(navCtrl, dataService, storage, loadingCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.dateOfToday = new Date().toISOString().slice(0, 10);
        this.accidentType = ['roadTrafficAccident', 'skidAndFall'];
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* environment */].baseUrl;
        this.arCreateUrl = "/api/v1/accidentRegisters/addAR";
        this.availOfRTA = false;
    }
    ArEditPage.prototype.ionViewDidLoad = function () {
        this.getcurrentUserHospital();
        this.getArDetails();
        this.currentForm = 1;
        this.getTitle();
        this.checkRTA();
    };
    ArEditPage.prototype.getTitle = function () {
        if (this.currentForm == 1) {
            this.pageTittleName = "Patient Information";
        }
    };
    ArEditPage.prototype.alert = function (message) {
        var alert = this.alertCtrl.create({
            subTitle: message,
            buttons: ['OK']
        }).present();
        // setTimeout(()=>alert.present(),1000/1000);
        // setTimeout(()=>alert.dismiss(),2000/4);
    };
    ArEditPage.prototype.loaderFunction = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please Wait...",
        });
    };
    ArEditPage.prototype.getArDetails = function () {
        this.arDetail = this.navParams.data;
        this.arNumber = this.arDetail.arNumber;
        this.patientInformation = this.arDetail.patientInformation;
        this.personBrought = this.arDetail.personBrought == undefined ? {} : this.arDetail.personBrought;
        this.mlcInformation = this.arDetail.mlcInformation == undefined ? {} : this.arDetail.mlcInformation;
        this.examinationDetails = this.arDetail.examinationDetails == undefined ? {} : this.arDetail.examinationDetails;
    };
    ArEditPage.prototype.getcurrentUserHospital = function () {
        this.currentUserHospital = JSON.parse(localStorage.getItem('currentUserHospital')).userDetails;
    };
    ArEditPage.prototype.goBack = function () {
        var _this = this;
        this.loaderFunction();
        this.loader.present();
        this.content.scrollToTop();
        var currentForm = this.currentForm - 1;
        if (currentForm == 1) {
            this.pageTittleName = "Patient Information";
        }
        else if (currentForm == 2) {
            this.pageTittleName = "MLC Information";
        }
        if (currentForm == 0) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__landing_landing__["a" /* LandingPage */]);
        }
        else {
            this.currentForm = currentForm;
        }
        setTimeout(function () {
            _this.loader.dismiss();
        }, 1000);
    };
    ArEditPage.prototype.checkRTA = function () {
        var RTA = this.mlcInformation['caseType'];
        this.availOfRTA = RTA.some(function (x) { return x == "Road Traffic Accident"; });
    };
    ArEditPage.prototype.checkingRTA = function (v) {
        var value = v;
        this.availOfRTA = value.some(function (x) { return x == "Road Traffic Accident"; });
        if (this.availOfRTA == false) {
            this.mlcInformation.patientPosition = 'No need';
            this.mlcInformation.patientType = 'No need';
            this.mlcInformation.vechileNumber = 'No need';
            this.mlcInformation.vechileType = 'No need';
        }
    };
    ArEditPage.prototype.isInformedToPolice = function (v) {
        var data = v;
        if (data == "No") {
            this.mlcInformation.toWhom = "No One";
        }
    };
    ArEditPage.prototype.vechileType = function (v) {
        var data = v;
        if (data == "Others/") {
            this.typeOfVechile = true;
        }
        else {
            this.typeOfVechile = false;
            this.mlcInformation.otherVechileType = '';
        }
    };
    ArEditPage.prototype.patientType = function (v) {
        var data = v;
        if (data == "Others/") {
            this.typeOfPatientPosition = true;
        }
        else {
            this.typeOfPatientPosition = false;
            this.mlcInformation.otherPatientPosition = '';
        }
    };
    ArEditPage.prototype.injuryType = function (v) {
        var data = v;
        if (data == "Others/") {
            this.typeOfInjury = true;
        }
        else {
            this.typeOfInjury = false;
            this.examinationDetails.otherTypeOfInjury = '';
        }
    };
    ArEditPage.prototype.checkOut = function (v) {
        var data = v;
        if (data != "Referred Out") {
            this.examinationDetails.referralInstitutionType = 'No';
            this.examinationDetails.reasonforReferral = 'No';
        }
    };
    ArEditPage.prototype.createDetails = function () {
        var _this = this;
        this.loaderFunction();
        this.loader.present();
        var data = {
            'arNumber': this.arNumber,
            'currentUserID': this.currentUserHospital._id,
            'patientInformation': this.patientInformation,
            'personBrought': this.personBrought,
            'mlcInformation': this.mlcInformation,
            'examinationDetails': this.examinationDetails,
            'hospitalDetails': this.currentUserHospital,
            'completed': this.currentForm == 4 ? true : false
        };
        if (!navigator.onLine) {
            this.alertCtrl.create({
                subTitle: "No internet",
                buttons: [
                    {
                        text: 'OK',
                        role: 'submit',
                        handler: function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__landing_landing__["a" /* LandingPage */]);
                        }
                    },
                ],
            }).present();
        }
        else {
            this.dataService.postData(this.baseUrl + this.arCreateUrl, data)
                .subscribe(function (res) {
                _this.loader.dismiss();
                _this.alertCtrl.create({
                    subTitle: "AR updated success",
                    buttons: [
                        {
                            text: 'OK',
                            role: 'submit',
                            handler: function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__landing_landing__["a" /* LandingPage */]);
                            }
                        },
                    ],
                }).present();
            });
        }
    };
    ArEditPage.prototype.validateForm = function () {
        if (this.currentForm == 1) {
            if (!this.patientInformation.arrivalDate || !this.patientInformation.name ||
                !this.patientInformation.age || !this.patientInformation.gender) {
                return true;
            }
        }
    };
    ArEditPage.prototype.comman = function () {
        if (this.validateForm()) {
            this.alert("Please fill Mandatory* fields");
            return;
        }
        this.currentForm = 1 + this.currentForm;
        this.content.scrollToTop();
        if (this.currentForm == 1) {
            this.pageTittleName = "Patient Information";
        }
        else if (this.currentForm == 2) {
            this.pageTittleName = "MLC Information";
        }
        else if (this.currentForm == 3) {
            this.pageTittleName = "Examination Details";
        }
        if (this.currentForm === 4) {
            this.createDetails();
        }
    };
    ArEditPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__landing_landing__["a" /* LandingPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ArEditPage.prototype, "content", void 0);
    ArEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ar-edit',template:/*ion-inline-start:"D:\IIT\IONIC\AR\src\pages\ar-edit\ar-edit.html"*/'<!--\n\n  Generated template for the ArCreatePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-2>\n\n          <ion-icon (click)="goBack()" name="arrow-back"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-8>\n\n          <ion-title align="center">{{pageTittleName}}</ion-title>\n\n        </ion-col>\n\n        <ion-col col-2 align="right">\n\n          <ion-icon (click)="goHome()" name="home"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <div id="patientInfoForm" *ngIf="currentForm==1">\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <h6>Date & Time of Arrival</h6>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Select date & time *</ion-label>\n\n            <ion-datetime type="text" name="admissionDate" [(ngModel)]="patientInformation.arrivalDate"\n\n              max="{{dateOfToday}}" displayFormat="MMM DD, YYYY,HH:mm"></ion-datetime>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Patient Name *</ion-label>\n\n            <ion-input type="text" name="name" [(ngModel)]="patientInformation.name" fz-elastic></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Age *</ion-label>\n\n            <ion-input type="number" name="age" [(ngModel)]="patientInformation.age"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Gender *</ion-label>\n\n            <ion-select interface="popover" name="gender" [(ngModel)]="patientInformation.gender">\n\n              <ion-option value="Male">Male</ion-option>\n\n              <ion-option value="Female">Female</ion-option>\n\n              <ion-option value="Transgender">Transgender</ion-option>\n\n              <ion-option value="Others">Others</ion-option>\n\n              <ion-option value="Unknown">Unknown</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Occupation</ion-label>\n\n            <ion-input type="text" name="occupation" [(ngModel)]="patientInformation.occupation"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Address</ion-label>\n\n            <ion-input type="text" name="doorNoStreet" [(ngModel)]="patientInformation.doorNoStreet"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n          <ion-col class="removePadding" col-12>\n\n              <ion-label stacked>Phone Number</ion-label> \n\n      </ion-col>\n\n        <ion-col col-3>\n\n            <ion-item class="removePaddingLeft">\n\n                <ion-input type="tel" readonly value="+91">+91</ion-input>\n\n              </ion-item>\n\n        </ion-col>\n\n        <ion-col col-9>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-input type="tel" name="tel" #phoneNumberPatient="ngModel" minlength="10" maxlength="10" [(ngModel)]="patientInformation.phoneNumber" required></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <div *ngIf="phoneNumberPatient.errors && phoneNumberPatient.touched" class="alert text-danger">\n\n          <div [hidden]="!phoneNumberPatient.errors.required">\n\n              Enter  Phonenumber\n\n          </div>\n\n          <div [hidden]="!phoneNumberPatient.errors.minlength">\n\n                 Atleast 10 character\n\n          </div>     \n\n      </div>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <h6>Identification Marks</h6>\n\n          <ion-row>\n\n            <ion-col col-5>\n\n              <ion-item class="removePaddingLeft">\n\n                <ion-label stacked>Select Nature</ion-label>\n\n                <ion-select interface="popover" name="identyMark1" [(ngModel)]="patientInformation.identyMark1">\n\n                  <ion-option value="Mlackmole">Black Mole</ion-option>\n\n                  <ion-option value="Scar">Scar</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-7>\n\n              <ion-item class="removePaddingLeft">\n\n                <ion-label stacked>Location #1</ion-label>\n\n                <ion-input type="text" name="location1" [(ngModel)]="patientInformation.location1"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-5>\n\n              <ion-item class="removePaddingLeft">\n\n                <ion-label stacked>Select Nature</ion-label>\n\n                <ion-select interface="popover" name="identyMark2" [(ngModel)]="patientInformation.identyMark2">\n\n                  <ion-option value="Blackmole">Black Mole</ion-option>\n\n                  <ion-option value="Scar">Scar</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-7>\n\n              <ion-item class="removePaddingLeft">\n\n                <ion-label stacked>Location #2</ion-label>\n\n                <ion-input type="text" name="location2" [(ngModel)]="patientInformation.location2"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <h6>Details of the person brought</h6>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Name</ion-label>\n\n            <ion-input type="text" name="name" [(ngModel)]="personBrought.name"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row> \n\n          <ion-col class="removePadding" col-12>\n\n              <ion-label stacked>Phone Number</ion-label> \n\n      </ion-col>\n\n        <ion-col col-3>\n\n            <ion-item class="removePaddingLeft">\n\n                <ion-input type="tel" readonly value="+91">+91</ion-input>\n\n              </ion-item>\n\n        </ion-col>\n\n        <ion-col col-9>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-input type="tel" name="phoneNumber" #phoneNumberBrought="ngModel" minlength="10" maxlength="10" [(ngModel)]="personBrought.phoneNumber" required></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <div *ngIf="phoneNumberBrought.errors && phoneNumberBrought.touched" class="alert text-danger">\n\n          <div [hidden]="!phoneNumberBrought.errors.required">\n\n              Enter  Phonenumber\n\n          </div>\n\n          <div [hidden]="!phoneNumberBrought.errors.minlength">\n\n                Atleast 10 character\n\n          </div>     \n\n      </div>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Relationship</ion-label>\n\n            <ion-input type="text" name="relationship" [(ngModel)]="personBrought.relationship"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Address</ion-label>\n\n            <ion-textarea rows="3" type="text" name="address"\n\n              [(ngModel)]="personBrought.address"></ion-textarea>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n    <div id="mlcInformationForm"  *ngIf="currentForm==2">\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Informed to the police ?</ion-label>\n\n            <ion-select type="text" name="isInformedToPolice" (ionChange)="isInformedToPolice($event)"\n\n             [(ngModel)]="mlcInformation.isInformedToPolice"\n\n              interface="popover">\n\n              <ion-option value="Yes">Yes</ion-option>\n\n              <ion-option value="No">No</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 *ngIf="mlcInformation.isInformedToPolice==\'Yes\'">\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Police Officer Name?</ion-label>\n\n            <ion-input type="text" name="toWhom" [(ngModel)]="mlcInformation.toWhom"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Accident Location</ion-label>\n\n            <ion-input type="text" name="location" [(ngModel)]="mlcInformation.location"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Case Type</ion-label>\n\n            <ion-select [id]="\'entities\'+i"  multiple="true" (ionChange)="checkingRTA($event,i)" name="caseType" [(ngModel)]="mlcInformation.caseType" cancelText="Cancel"\n\n              okText="Okay">\n\n              <ion-option value="Accident">Accident</ion-option>\n\n              <ion-option value="Road Traffic Accident">Road Traffic Accident</ion-option>\n\n              <ion-option value="Assault">Assault</ion-option>\n\n              <ion-option value="Burns">Burns</ion-option>\n\n              <ion-option value="Poisoning">Poisoning</ion-option>\n\n              <ion-option value="Suicide">Suicide</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12 *ngIf="availOfRTA==true">\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Patient Type</ion-label>\n\n            <ion-select interface="popover" name="patientType" [(ngModel)]="mlcInformation.patientType">\n\n              <ion-option value="Driver">Driver</ion-option>\n\n              <ion-option value="PillionRider">Pillion Rider</ion-option>\n\n              <ion-option value="Passenger">Passenger</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12 *ngIf="availOfRTA==true">\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Vechile Type</ion-label>\n\n            <ion-select interface="popover" name="vechileType" [(ngModel)]="mlcInformation.vechileType" (ionChange)="vechileType($event)">\n\n              <ion-option value="Two wheeler">Two Wheeler</ion-option>\n\n              <ion-option value="Four wheeler">Four Wheeler</ion-option>\n\n              <ion-option value="Others/">Others</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="typeOfVechile==true || mlcInformation.otherVechileType">\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Enter Vechile Type</ion-label>\n\n            <ion-input type="text" name="otherVechileType" [(ngModel)]="mlcInformation.otherVechileType"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        </ion-row>\n\n      <ion-row *ngIf="availOfRTA==true">\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Vechile Number</ion-label>\n\n            <ion-input type="text" name="name" [(ngModel)]="mlcInformation.vechileNumber"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="availOfRTA==true">\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Patient Position</ion-label>\n\n            <ion-select interface="popover" name="patientPosition" [(ngModel)]="mlcInformation.patientPosition" (ionChange)="patientType($event)">\n\n              <ion-option value="Vechile1">Vechile 1</ion-option>\n\n              <ion-option value="Vechile2">Vechile 2</ion-option>\n\n              <ion-option value="Pedestrain">Pedestrain</ion-option>\n\n              <ion-option value="Others/">Others</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="typeOfPatientPosition==true || mlcInformation.otherPatientPosition">\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Enter Patient Position</ion-label>\n\n            <ion-input type="text" name="otherPatientPosition" [(ngModel)]="mlcInformation.otherPatientPosition"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Dying Declaration Needed ?</ion-label>\n\n            <ion-select type="text" name="isNeededDyingDeclaration" [(ngModel)]="mlcInformation.isNeededDyingDeclaration"\n\n              interface="popover">\n\n              <ion-option value="Yes">Yes</ion-option>\n\n              <ion-option value="no">No</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Statement Needed ?</ion-label>\n\n            <ion-select type="text" name="isNeededStatement" [(ngModel)]="mlcInformation.isNeededStatement"\n\n              interface="popover">\n\n              <ion-option value="Yes">Yes</ion-option>\n\n              <ion-option value="no">No</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n    <div id="examinationForm" *ngIf="currentForm==3">\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item class="removePaddingLeft">\n\n            <ion-label stacked>Nature of Injury</ion-label>\n\n            <ion-select interface="popover" name="natureOfInjury" [(ngModel)]="examinationDetails.natureOfInjury">\n\n              <ion-option value="Simple">Simple</ion-option>\n\n              <ion-option value="Grievous">Grievous</ion-option>\n\n              <ion-option value="Opinion Reserved">Opinion Reserved</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <ion-item class="removePaddingLeft">\n\n        <ion-label stacked>Type of Injury</ion-label>\n\n        <ion-select interface="popover" name="typeOfInjury"  (ionChange)="injuryType($event)"\n\n         [(ngModel)]="examinationDetails.typeOfInjury">\n\n          <ion-option value="Abrasion">Abrasion</ion-option>\n\n          <ion-option value="Contusion">Contusion</ion-option>\n\n          <ion-option value="Laceration">Laceration</ion-option>\n\n          <ion-option value="Incised">Incised</ion-option>\n\n          <ion-option value="Chop">Chop</ion-option>\n\n          <ion-option value="Crush">Crush</ion-option>\n\n          <ion-option value="Fracture">Fracture</ion-option>\n\n          <ion-option value="Others/">Others</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-col>\n\n</ion-row>\n\n<ion-row *ngIf="typeOfInjury==true || examinationDetails.otherTypeOfInjury">\n\n<ion-col col-12>\n\n  <ion-item class="removePaddingLeft">\n\n    <ion-label stacked>Enter Injury Type</ion-label>\n\n    <ion-input type="text" name="otherTypeOfInjury" [(ngModel)]="examinationDetails.otherTypeOfInjury"></ion-input>\n\n  </ion-item>\n\n</ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12>\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>Injured Part of Body</ion-label>\n\n      <ion-select multiple="true" name="injuredPartOfBody"\n\n       [(ngModel)]="examinationDetails.injuredPartOfBody" cancelText="Cancel"\n\n        okText="Okay">\n\n        <ion-option value="Head">Head</ion-option>\n\n        <ion-option value="Neck">Neck</ion-option>\n\n        <ion-option value="Larynx">Larynx</ion-option>\n\n        <ion-option value="Thyroid">Thyroid</ion-option>\n\n        <ion-option value="Upper Limbs">Upper Limbs</ion-option>\n\n        <ion-option value="Lower Limbs">Lower Limbs</ion-option>\n\n        <ion-option value="Chest">Chest</ion-option>\n\n        <ion-option value="Abdomen">Abdomen</ion-option>\n\n        <ion-option value="Pelvis">Pelvis</ion-option>\n\n        <ion-option value="Spine">Spine</ion-option>\n\n        <ion-option value="Genitalia">Genitalia</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12>\n\n    <h6>Physiological Response</h6>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-item class="removePaddingLeft">\n\n          <ion-label stacked>Heart Rate</ion-label>\n\n          <ion-input type="number" name="heartRate" [(ngModel)]="examinationDetails.heartRate"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col class="removePadding" col-12>\n\n            <ion-label stacked>Blood Pressure</ion-label> \n\n    </ion-col>\n\n          <ion-col col-5>\n\n              <ion-item class="removePaddingLeft removePadding">\n\n              <ion-input type="number" name="bloodPressureHigh" \n\n              [(ngModel)]="examinationDetails.bloodPressureHigh">\n\n              </ion-input>\n\n              </ion-item>\n\n          </ion-col>\n\n          <ion-col col-2 class="sliter" align="center"><span>/</span></ion-col>\n\n          <ion-col col-5>\n\n              <ion-item class="removePaddingLeft removePadding">\n\n              <ion-input type="number" name="bloodPressureLow" \n\n              [(ngModel)]="examinationDetails.bloodPressureLow">\n\n              </ion-input>\n\n              </ion-item>\n\n          </ion-col>\n\n    </ion-row>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12>\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>Conscious</ion-label>\n\n      <ion-select type="text" name="conscious" [(ngModel)]="examinationDetails.conscious"\n\n        interface="popover">\n\n        <ion-option value="Yes">Yes</ion-option>\n\n        <ion-option value="No">No</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12>\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>Orientation</ion-label>\n\n      <ion-select type="text" name="orientation" [(ngModel)]="examinationDetails.orientation"\n\n        interface="popover">\n\n        <ion-option value="Oriented">Oriented</ion-option>\n\n        <ion-option value="Disoriented">Disoriented</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12>\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>Description of Pupil</ion-label>\n\n      <ion-select type="text" name="descriptionOfPupil" [(ngModel)]="examinationDetails.descriptionOfPupil"\n\n        interface="popover">\n\n        <ion-option value="Equal in Size">Equal in Size</ion-option>\n\n        <ion-option value="Not-Equal">Not-Equal</ion-option>\n\n        <ion-option value="Constricted">Constricted</ion-option>\n\n        <ion-option value="Dilated and Fixed">Dilated and Fixed</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12>\n\n    <!-- <h6>Physician Opinion</h6> -->\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>Physician Opinion</ion-label>\n\n      <ion-textarea rows="3" type="text" name="physicianOpinion"\n\n        [(ngModel)]="examinationDetails.physicianOpinion"></ion-textarea>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12>\n\n    <!-- <h6>History</h6> -->\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>History</ion-label>\n\n      <ion-textarea rows="3" type="text" name="history"\n\n        [(ngModel)]="examinationDetails.history"></ion-textarea>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12>\n\n    <!-- <h6>Treatment Plan</h6> -->\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>Treatment Plan</ion-label>\n\n      <ion-textarea rows="3" type="text" name="treatmentPlan"\n\n        [(ngModel)]="examinationDetails.treatmentPlan"></ion-textarea>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12>\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>Outcome</ion-label>\n\n      <ion-select type="text" name="outCome" (ionChange)="checkOut($event)"\n\n        [(ngModel)]="examinationDetails.outCome"\n\n        interface="popover">\n\n        <ion-option value="Treated">Treated</ion-option>\n\n        <ion-option value="Admitted">Admitted</ion-option>\n\n        <ion-option value="Referred Out">Referred Out</ion-option>\n\n        <ion-option value="Expired">Expired</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row *ngIf="examinationDetails.outCome==\'Referred Out\'">\n\n  <ion-col col-12>\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>Referral Institution Type</ion-label>\n\n      <ion-select type="text" name="referralInstitutionType" [(ngModel)]="examinationDetails.referralInstitutionType"\n\n        interface="popover">\n\n        <ion-option value="Government">Government</ion-option>\n\n        <ion-option value="Private">Private</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-12 *ngIf="examinationDetails.outCome==\'Referred Out\'">\n\n    <ion-item class="removePaddingLeft">\n\n      <ion-label stacked>Reason for Referral</ion-label>\n\n      <ion-select type="text" name="reasonforReferral" [(ngModel)]="examinationDetails.reasonforReferral"\n\n        interface="popover">\n\n        <ion-option value="Blood not Available">Blood not Available</ion-option>\n\n        <ion-option value="Specialist not Available">Specialist not Available</ion-option>\n\n        <ion-option value="Complicated">Complicated</ion-option>\n\n        <ion-option value="Facility not Available">Facility not Available</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-col>\n\n</ion-row>\n\n\n\n    </div>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <button *ngIf="currentForm<=2" ion-button full (click)="comman()" align="center">Next</button>\n\n</ion-footer>\n\n<ion-footer>\n\n<button *ngIf="currentForm==3"  ion-button full (click)="comman()"   align="center">Update</button>\n\n</ion-footer>'/*ion-inline-end:"D:\IIT\IONIC\AR\src\pages\ar-edit\ar-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_network_network__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ArEditPage);
    return ArEditPage;
}());

//# sourceMappingURL=ar-edit.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hospital = JSON.parse(localStorage.getItem('currentUserHospital')).userDetails;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
    };
    ProfilePage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\IIT\IONIC\AR\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar>\n        <ion-grid>\n            <ion-row>\n                <ion-col col-2>\n                    <button ion-button menuToggle icon-only>\n                        <ion-icon name=\'menu\'></ion-icon>\n                    </button>\n                </ion-col>\n                <ion-col col-8>\n                    <ion-title align="center" class="headerName">Profile</ion-title>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-buttons end>\n                        <button ion-button icon-only (click)="home()">\n                            <ion-icon name="home"></ion-icon>\n                        </button>\n                    </ion-buttons>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12>\n                <form>\n                    <ion-item class="removePaddingLeft">\n                        <ion-label >Hospital Name</ion-label>\n                        <ion-input type="text" name="hospital" readonly [(ngModel)]="hospital.hospitalName"></ion-input>\n                    </ion-item>\n                    <ion-item class="removePaddingLeft">\n                        <ion-label >District</ion-label>\n                        <ion-input type="text" name="district" readonly [(ngModel)]="hospital.district" ></ion-input>\n                    </ion-item>\n                    <ion-item class="removePaddingLeft">\n                        <ion-label >Directorate</ion-label>\n                        <ion-input type="text" name="hospitalDirectorate" readonly [(ngModel)]="hospital.hospitalDirectorate"></ion-input>\n                    </ion-item>\n                    <ion-item class="removePaddingLeft">\n                        <ion-label >Type</ion-label>\n                        <ion-input type="text" name="hospitalType" readonly [(ngModel)]="hospital.hospitalType"></ion-input>\n                    </ion-item>\n                    <ion-item class="removePaddingLeft">\n                        <ion-label >Hospital Number</ion-label>\n                        <ion-input type="text" name="hospitalId" readonly [(ngModel)]="hospital.hospitalNumber"></ion-input>\n                    </ion-item>\n                </form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"D:\IIT\IONIC\AR\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ar-create/ar-create.module": [
		687,
		5
	],
	"../pages/ar-edit/ar-edit.module": [
		688,
		4
	],
	"../pages/landing/landing.module": [
		689,
		3
	],
	"../pages/login/login.module": [
		690,
		2
	],
	"../pages/menu/menu.module": [
		691,
		1
	],
	"../pages/profile/profile.module": [
		692,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 217;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ShareProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ShareProvider = /** @class */ (function () {
    function ShareProvider(http) {
        this.http = http;
    }
    ShareProvider.prototype.setUser = function (v) {
        this.user = v;
    };
    ShareProvider.prototype.getUser = function () {
        return this.user;
    };
    ShareProvider.prototype.getDist = function () {
        return this.http.get('assets/masterData/district.json');
    };
    ShareProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], ShareProvider);
    return ShareProvider;
}());

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.checkLocal();
    };
    HomePage.prototype.checkLocal = function () {
        var currentUserHospital = JSON.parse(localStorage.getItem('currentUserHospital'));
        if (currentUserHospital && currentUserHospital.token) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
        }
        else if (!currentUserHospital || currentUserHospital.token === null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], HomePage.prototype, "nav", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\IIT\IONIC\AR\src\pages\home\home.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content> -->'/*ion-inline-end:"D:\IIT\IONIC\AR\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(365);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_landing_landing__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_ar_edit_ar_edit__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_ar_create_ar_create__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_date_picker_ngx__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__swimlane_ngx_datatable__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_network_network__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_http_interceptor__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_share_share__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ar_create_ar_create__["a" /* ArCreatePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_ar_edit_ar_edit__["a" /* ArEditPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ar-create/ar-create.module#ArCreatePageModule', name: 'ArCreatePage', segment: 'ar-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ar-edit/ar-edit.module#ArEditPageModule', name: 'ArEditPage', segment: 'ar-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16__swimlane_ngx_datatable__["NgxDatatableModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ar_create_ar_create__["a" /* ArCreatePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_ar_edit_ar_edit__["a" /* ArEditPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_date_picker_ngx__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_18__services_http_interceptor__["a" /* HttpInter */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_17__providers_network_network__["a" /* NetworkProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_share_share__["a" /* ShareProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NetworkProvider = /** @class */ (function () {
    function NetworkProvider(http) {
        this.http = http;
    }
    NetworkProvider.prototype.getData = function (url) {
        return this.http.get(url);
    };
    NetworkProvider.prototype.postData = function (url, body) {
        return this.http.post(url, body);
    };
    NetworkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], NetworkProvider);
    return NetworkProvider;
}());

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    // baseUrl:"http://localhost:5000"
    // baseUrl:"https://accidentregister.herokuapp.com"
    baseUrl: "http://13.234.52.55:9002"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker_ngx__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment_environment__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ar_edit_ar_edit__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_network_network__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ar_create_ar_create__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { admissionDetails } from '../../module/admissionDetails';






/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LandingPage = /** @class */ (function () {
    // admissionDetails = {} as admissionDetails
    function LandingPage(navCtrl, navParams, dataService, loadingCtrl, alertCtrl, nav, storage, datePicker) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.storage = storage;
        this.datePicker = datePicker;
        this.onlineOffline = navigator.onLine;
        this.dateOfToday = new Date().toISOString().slice(0, 10);
        this.baseURL = __WEBPACK_IMPORTED_MODULE_3__environment_environment__["a" /* environment */].baseUrl;
        this.findArUrl = "/api/v1/accidentRegisters/arLists";
        this.rows = [];
        this.arLists = [];
        this.tablestyle = 'bootstrap';
        this.findArDetails = {
            currentUserID: '',
            admissionDate: '' ? this.dateOfToday : this.dateOfToday
        };
        this.hospital = JSON.parse(localStorage.getItem('currentUserHospital')).userDetails;
    }
    LandingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getLocalStorage();
        setInterval(function () { _this.checkInternet(); _this.checkLocalStorage(); }, 1000);
        // setInterval(()=>{this.findAdmissions()},5000)
    };
    LandingPage.prototype.alert = function (message) {
        var alert = this.alertCtrl.create({
            subTitle: message,
        });
        setTimeout(function () { return alert.present(); }, 1000 / 1000);
        setTimeout(function () { return alert.dismiss(); }, 3000 / 2);
    };
    LandingPage.prototype.loaderFunction = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please Wait...",
        });
    };
    LandingPage.prototype.getLocalStorage = function () {
        this.localStorage = JSON.parse(localStorage.getItem('currentUserHospital'));
        this.findArDetails.currentUserID = this.localStorage.userDetails._id;
        this.findAdmissions();
    };
    LandingPage.prototype.checkInternet = function () {
        if (!navigator.onLine) {
            this.networkStatus = 'Offline';
        }
        else {
            this.networkStatus = 'Online';
        }
    };
    LandingPage.prototype.checkLocalStorage = function () {
        var _this = this;
        this.storage.get('arLists').then(function (data) {
            if (data && data != null && data != undefined) {
                _this.localArListsLength = data.length;
            }
            else {
                _this.localArListsLength = 0;
            }
        });
    };
    LandingPage.prototype.newReg = function () {
        // this.navCtrl.setRoot(GeneralRegisterPage);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__ar_create_ar_create__["a" /* ArCreatePage */]);
    };
    LandingPage.prototype.goEdit = function (value) {
        this.loaderFunction();
        this.loader.present();
        var _id = value;
        for (var i = 0; i < this.arLists.length; i++) {
            if (this.arLists[i]._id == _id) {
                this.editData = this.arLists[i];
            }
        }
        this.loader.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ar_edit_ar_edit__["a" /* ArEditPage */], this.editData);
    };
    LandingPage.prototype.findAdmissions = function () {
        var _this = this;
        if (!navigator.onLine) {
            this.alert('No Internet Connection');
        }
        else {
            var data = {
                currentUserID: this.findArDetails.currentUserID,
                admissionDate: this.findArDetails.admissionDate == '' ? this.dateOfToday : this.findArDetails.admissionDate
            };
            this.loaderFunction();
            this.loader.present();
            this.dataService.postData(this.baseURL + this.findArUrl, data)
                .subscribe(function (res) {
                _this.rows = [];
                _this.arLists = res;
                _this.alert(_this.arLists.status);
                if (_this.arLists && _this.arLists.data) {
                    _this.arLists = _this.arLists['data'];
                    _this.arLists.forEach(function (lists) {
                        if (lists.patientInformation) {
                            var data_1 = {
                                _id: lists._id,
                                name: lists.patientInformation.name == null || undefined ? '' : lists.patientInformation.name,
                                age: lists.patientInformation.age == null || undefined ? '' : lists.patientInformation.age,
                                gender: lists.patientInformation.gender == null || undefined ? '' : lists.patientInformation.gender
                            };
                            _this.rows.push(data_1);
                        }
                    });
                }
                _this.loader.dismiss();
            });
        }
    };
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-landing',template:/*ion-inline-start:"D:\IIT\IONIC\AR\src\pages\landing\landing.html"*/'<!--\n\n  Generated template for the LandingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n      <ion-grid>\n\n          <ion-row>\n\n              <ion-col col-2>\n\n                  <button ion-button menuToggle icon-only>\n\n                      <ion-icon name=\'menu\'></ion-icon>\n\n                  </button>\n\n              </ion-col>\n\n              <ion-col col-8>\n\n                  <ion-title align="center" class="headerName">Homepage</ion-title>\n\n              </ion-col>\n\n              <ion-col col-2>\n\n              </ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-9>\n\n                    <ion-item class="removePaddingLeft">\n\n                        <ion-label stacked>Select date</ion-label>\n\n                        <ion-datetime type="text" name="admissionDate" max={{dateOfToday}}\n\n                        [(ngModel)]="findArDetails.admissionDate" (ngModelChange)="findAdmissions()" displayFormat="MMM DD, YYYY"></ion-datetime>\n\n                    </ion-item>\n\n            </ion-col>\n\n            <ion-col col-3 align="center">\n\n                 <ion-icon name="md-add-circle" class="addNew" (click)="newReg()"></ion-icon>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class="internetChecks">\n\n            <ion-col align="left" col-12>\n\n                <h6>Internet connection :<span style="font-weight:500" [ngClass]="networkStatus==\'Online\' ? \'success\' : \'danger\'">{{networkStatus}}\n\n                </span>\n\n                </h6>\n\n            </ion-col>\n\n        </ion-row>\n\n            <ion-row class="uploadLists">\n\n                <ion-col align="left" col-12>\n\n                <h6>Upload pending AR Lists :<span style="font-weight:100">{{localArListsLength}}</span>\n\n                </h6>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <h6>AR List</h6>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <!-- <ngx-datatable class="fullscreen" [ngClass]="tablestyle" [rows]="rows" [columnMode]="\'force\'" [sortType]="\'multi\'" [reorderable]="false">\n\n                    <ngx-datatable-column class="details" name="Name"></ngx-datatable-column>\n\n                    <ngx-datatable-column name="Gender"></ngx-datatable-column>\n\n                    <ngx-datatable-column name="Age"></ngx-datatable-column>\n\n                    <ngx-datatable-column name="id" [resizeable]="false">\n\n                        <ng-template ngx-datatable-header-template>\n\n                          Action\n\n                        </ng-template>\n\n                        <ng-template let-row="row" ngx-datatable-cell-template>\n\n                          <button class="btnTable" ion-button small outline color="blue" (click)="goEdit(row._id)">Edit</button>\n\n                        </ng-template>\n\n                      </ngx-datatable-column>\n\n                  </ngx-datatable> -->\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-grid *ngIf="rows.length">\n\n            <ion-row>\n\n                <ion-col col-4 class="table" align="center">Name\n\n                </ion-col>\n\n                <ion-col col-2 class="table" align="center">\n\n                    Age\n\n                </ion-col>\n\n                <ion-col col-3 class="table" align="center">\n\n                    Gender\n\n                </ion-col>\n\n                <ion-col col-3 class="table" align="center">\n\n                    Action\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row class="tableDetails" *ngFor="let row of rows">\n\n                <ion-col col-4 class="table">{{row.name}}\n\n                </ion-col>\n\n                <ion-col col-2 class="table">\n\n                    {{row.age}}\n\n                </ion-col>\n\n                <ion-col col-3 class="table">\n\n                    {{row.gender}}\n\n                </ion-col>\n\n                <ion-col col-3 class="table" align="center">\n\n                    <button ion-button small (click)="goEdit(row._id)">Edit</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n        <ion-grid *ngIf="!rows.length">\n\n            <ion-row>\n\n                <ion-col col-4 class="table" align="center">\n\n                    Name\n\n                </ion-col>\n\n                <ion-col col-2 class="table" align="center">\n\n                    Age\n\n                </ion-col>\n\n                <ion-col col-3 class="table" align="center">\n\n                    Gender\n\n                </ion-col>\n\n                <ion-col col-3 class="table" align="center">\n\n                    Action\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row >\n\n                <ion-col col-12 class="table">\n\n                    No Records Found\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <button ion-button full align="center">{{hospital.hospitalName}},{{hospital.district}}</button>\n\n  </ion-footer>\n\n\n\n'/*ion-inline-end:"D:\IIT\IONIC\AR\src\pages\landing\landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_network_network__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker_ngx__["a" /* DatePicker */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPage.prototype.openPage = function (page) {
        switch (page) {
            case 'dashboard':
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__landing_landing__["a" /* LandingPage */]);
                break;
            case 'profile':
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
                break;
            case 'logout':
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            default:
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__landing_landing__["a" /* LandingPage */]);
                break;
        }
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__landing_landing__["a" /* LandingPage */];
    };
    MenuPage.prototype.logout = function () {
        localStorage.removeItem('currentUserHospital');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-menu',template:/*ion-inline-start:"D:\IIT\IONIC\AR\src\pages\menu\menu.html"*/'<ion-menu [content]="content">\n\n  <ion-content>\n\n      <!-- <div class="logoDashboard" align="center">\n\n          <img src="./assets/imgs/logo.jpg" />\n\n      </div> -->\n\n      <ion-list>\n\n          <button  menuClose ion-item (click)="openPage(\'dashboard\')">\n\n            Homepage\n\n          </button>\n\n          <button  menuClose ion-item (click)="openPage(\'profile\')">\n\n              Profile\n\n            </button>\n\n          <button  menuClose ion-item (click)="logout()">\n\n              Logout\n\n            </button>\n\n      </ion-list>\n\n  </ion-content>\n\n  <ion-footer>\n\n    <br>\n\n    <div class="item item-avatar item-text-wrap" text-center>\n\n      <img style="max-height:60px" src="./assets/imgs/RGBlogo.png" class="grow">\n\n      <p class="rcolor">Designed & Developed By</p>\n\n      <p class="rcolor"> RBG Labs, IIT Madras</p>\n\n      <hr>\n\n  </div>\n\n  </ion-footer>\n\n</ion-menu>\n\n\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\IIT\IONIC\AR\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_network_network__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environment_environment__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, storage, dataService, statusBar, splashScreen) {
        var _this = this;
        this.storage = storage;
        this.dataService = dataService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_7__environment_environment__["a" /* environment */].baseUrl;
        this.arCreateUrl = "/api/v1/accidentRegisters/addAR";
        this.onlineOffline = navigator.onLine;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        setInterval(function () { _this.checkInternet(); }, 1000);
        setInterval(function () { _this.createArList(); }, 20000);
    }
    MyApp.prototype.checkInternet = function () {
        if (!navigator.onLine) {
            this.networkStatus = 'Offline';
        }
        else {
            this.networkStatus = 'Online';
        }
    };
    MyApp.prototype.createArList = function () {
        var _this = this;
        if (this.networkStatus == 'Online') {
            this.localArListData = [];
            this.storage.get('arLists').then(function (data) {
                _this.localArListData = data;
                if (_this.localArListData != null && _this.localArListData != undefined) {
                    _this.dataService.postData(_this.baseUrl + _this.arCreateUrl, _this.localArListData).subscribe(function (res) {
                        if (res['code'] == 200) {
                            _this.storage.remove('arLists');
                        }
                    });
                }
            });
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\IIT\IONIC\AR\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\IIT\IONIC\AR\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers_network_network__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpInter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);



var HttpInter = /** @class */ (function () {
    function HttpInter() {
    }
    HttpInter.prototype.intercept = function (req, next) {
        var jwt = localStorage.getItem('currentUserHospital');
        jwt ? jwt = JSON.parse(jwt).token : '';
        if (jwt) {
            req = req.clone({
                setHeaders: {
                    Authorization: "Bearer " + jwt
                }
            });
        }
        return next.handle(req);
    };
    return HttpInter;
}());

//# sourceMappingURL=http.interceptor.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment_environment__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_network_network__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_share_share__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, nav, http, alertCtrl, loadingCtrl, shareService, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nav = nav;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.shareService = shareService;
        this.dataService = dataService;
        this.showDMS_1 = '0';
        this.showDMS_2 = '0';
        this.baseURL = __WEBPACK_IMPORTED_MODULE_3__environment_environment__["a" /* environment */].baseUrl;
        this.loginUrl = "/api/v1/hospitals/hospitalLogin";
        this.findHospitalUrl = "/api/v1/hospitals/findHospitals";
        this.errMsg = {
            message: ''
        };
        this.selectedHospital = '';
        this.login = {
            hospitalNumber: '',
            password: ''
        };
        this.DMS = [];
        this.DME = [];
        this.nonGovt = [];
    }
    LoginPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    LoginPage.prototype.loaderFunction = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please Wait...",
        });
    };
    LoginPage.prototype.onChangeHospital = function (hospital) {
        this.selectedHospital = hospital;
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        this.getDistrict();
    };
    LoginPage.prototype.onLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loaderFunction();
                this.loader.present();
                this.dataService.postData(this.baseURL + this.loginUrl, this.login).subscribe(function (res) {
                    _this.curentUser = res;
                    _this.loader.dismiss();
                    if (_this.curentUser.code === 200) {
                        localStorage.setItem('currentUserHospital', JSON.stringify({ token: _this.curentUser.token, userDetails: _this.curentUser.data }));
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
                    }
                    else {
                        _this.alert(_this.curentUser.status);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.findHospitals = function (value) {
        var _this = this;
        this.loaderFunction();
        var data = {
            "district": value
        };
        this.selectedHospital = '';
        this.login.hospitalNumber = '';
        this.DME = [];
        this.DMS = [];
        this.nonGovt = [];
        this.loader.present();
        this.dataService.postData(this.baseURL + this.findHospitalUrl, data).subscribe(function (res) {
            _this.loader.dismiss();
            var hospitals = res;
            if (hospitals['code'] == 200 && hospitals['data'].length != 0) {
                for (var i = 0; i < hospitals['data'].length; i++) {
                    if (hospitals['data'][i].hospitalDirectorate === "DMS") {
                        _this.DMS.push(hospitals['data'][i]);
                    }
                    else if (hospitals['data'][i].hospitalDirectorate === "DME") {
                        _this.DME.push(hospitals['data'][i]);
                    }
                    else if (hospitals['data'][i].hospitalDirectorate === "Non Govt") {
                        _this.nonGovt.push(hospitals['data'][i]);
                    }
                }
            }
            else {
                _this.alert(res['status']);
            }
        });
    };
    LoginPage.prototype.getDistrict = function () {
        var _this = this;
        this.shareService.getDist().subscribe(function (res) {
            _this.districts = res['districts'];
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\IIT\IONIC\AR\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<!-- \n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar> -->\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 align="center" >\n        <div class="loginLogo">\n          <img src="./assets/imgs/logo.jpg" />\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <h5 class="alert" align="center">{{errMsg.message}}</h5>\n       <ion-col col-12>\n        <ion-item class="removePaddingLeft">\n          <ion-label stacked>Select District</ion-label>\n          <ion-select interface="popover" (ionChange)="findHospitals($event)" name="district" [(ngModel)]="login.district">\n              <ion-option  *ngFor="let district of districts" value="{{district}}">{{district}}</ion-option>\n          </ion-select>\n      </ion-item>\n       </ion-col>\n    </ion-row>\n    <ion-row *ngIf="DMS.length!=\'0\' && (!selectedHospital|| selectedHospital == \'hospital1\') ">\n      <ion-col col-12>\n       <ion-item class="removePaddingLeft">\n         <ion-label stacked>DMS</ion-label>\n         <ion-select interface="popover" name="hospitalName" (ionChange)="onChangeHospital(\'hospital1\')" #hospitalNumber1="ngModel" [(ngModel)]="login.hospitalNumber">\n             <ion-option *ngFor="let list of DMS"value="{{list.hospitalNumber}}">{{list.hospitalName}}</ion-option>\n         </ion-select>\n     </ion-item>\n      </ion-col>\n   </ion-row>\n   <ion-row>\n    <ion-col col-12 *ngIf="DME.length!=\'0\' && (!selectedHospital|| selectedHospital == \'hospital2\')">\n     <ion-item class="removePaddingLeft">\n       <ion-label stacked>DME</ion-label>\n       <ion-select interface="popover" name="hospitalName" (ionChange)="onChangeHospital(\'hospital2\')"  #hospitalNumber2="ngModel" [(ngModel)]="login.hospitalNumber">\n           <ion-option *ngFor="let list of DME" value="{{list.hospitalNumber}}">{{list.hospitalName}}</ion-option>\n       </ion-select>\n   </ion-item>\n    </ion-col>\n </ion-row>\n <ion-row>\n  <ion-col col-12 *ngIf="nonGovt.length!=\'0\' && (!selectedHospital|| selectedHospital == \'hospital3\')">\n   <ion-item class="removePaddingLeft">\n     <ion-label stacked>Non Govt</ion-label>\n     <ion-select interface="popover" name="hospitalName" (ionChange)="onChangeHospital(\'hospital3\')"  #hospitalNumber3="ngModel" [(ngModel)]="login.hospitalNumber">\n         <ion-option *ngFor="let list of nonGovt" value="{{list.hospitalNumber}}">{{list.hospitalName}}</ion-option>\n     </ion-select>\n </ion-item>\n  </ion-col>\n</ion-row>\n <ion-row *ngIf="login.hospitalNumber">\n   <ion-col col-12 class="addPaddingBtm">\n    <ion-item class="removePaddingLeft">\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="Password" name="password" [(ngModel)]="login.password"></ion-input>\n    </ion-item>\n   </ion-col>\n </ion-row>\n <ion-row>\n   <ion-col col-12>\n    <button ion-button full (click)="onLogin(login)" align="center">Login</button>\n  </ion-col>\n </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\IIT\IONIC\AR\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_share_share__["a" /* ShareProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_network_network__["a" /* NetworkProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[360]);
//# sourceMappingURL=main.js.map