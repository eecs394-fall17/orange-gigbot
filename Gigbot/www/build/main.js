webpackJsonp([5],{

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.idInterview = navParams.get("idInterview");
        console.log("idInterview: " + this.idInterview);
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage.prototype.send = function () {
        //console.log(this.newmessage + ', '+this.username);
    };
    return ChatPage;
}());
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"/Users/niemer/Documents/School/2017FQ/eecs394_orange/orange-gigbot/Gigbot/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Resumeé Feedback       \n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n   <ion-list no-lines>\n    <ion-item *ngFor="let message of messagesList">\n     <h3>{{name}}</h3>\n     <p>{{message}}</p>\n    </ion-item>\n   </ion-list>\n  </ion-content>\n  <ion-footer>\n   <ion-item>\n    <ion-input type="text" placeholder="type here..." [(ngModel)]="newmessage"></ion-input>\n    <button ion-button clear item-right (click)="send()">Send</button>\n   </ion-item>\n  </ion-footer>'/*ion-inline-end:"/Users/niemer/Documents/School/2017FQ/eecs394_orange/orange-gigbot/Gigbot/src/pages/chat/chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(227);
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
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LibraryPage = (function () {
    function LibraryPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.questions = db.list("/Questions").valueChanges();
        console.log(this.questions);
    }
    LibraryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LibraryPage');
    };
    return LibraryPage;
}());
LibraryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-library',template:/*ion-inline-start:"/Users/niemer/Documents/School/2017FQ/eecs394_orange/orange-gigbot/Gigbot/src/pages/library/library.html"*/'<!--\n  Generated template for the LibraryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Interview Question Library</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item text-wrap class="text" *ngFor="let question of questions | async">\n      {{question}}\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/niemer/Documents/School/2017FQ/eecs394_orange/orange-gigbot/Gigbot/src/pages/library/library.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], LibraryPage);

//# sourceMappingURL=library.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_library__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__practice_practice__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__network_network__ = __webpack_require__(172);
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
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */




//
var MainPage = (function () {
    function MainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage.prototype.navchatpage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */]);
    };
    MainPage.prototype.navlibrarypage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__library_library__["a" /* LibraryPage */]);
    };
    MainPage.prototype.navpracticepage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__practice_practice__["a" /* PracticePage */]);
    };
    MainPage.prototype.navnetworkpage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__network_network__["a" /* NetworkPage */]);
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-main',template:/*ion-inline-start:"/Users/niemer/Documents/School/2017FQ/eecs394_orange/orange-gigbot/Gigbot/src/pages/main/main.html"*/'<!--\n  Generated template for the MainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Menu</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <!--ion-content class="card-background-page"-->\n\n          <ion-list>\n            \n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <img src="assets/imgs/microphone.png">\n                  </ion-thumbnail>\n                  <h2>Practice Interview</h2>\n                  <p>Train recording an interview with sample questions</p>\n                  <button ion-button clear item-end (click)="navpracticepage()">Go</button>\n              </ion-item>\n\n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <img src="assets/imgs/tablet.png">\n                  </ion-thumbnail>\n                  <h2>Question Library</h2>\n                  <p>Industry specific mock interview question library</p>\n                  <button ion-button clear item-end (click)="navlibrarypage()">Go</button>\n              </ion-item>\n\n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <img src="assets/imgs/businessman.png">\n                  </ion-thumbnail>\n                  <h2>Feedback</h2>\n                  <p>Resume feedback from industry experts</p>\n                  <button ion-button clear item-end (click)=\'navchatpage()\'>Go</button>\n              </ion-item>\n\n              <ion-item>\n                <ion-thumbnail item-start>\n                  <img src="assets/imgs/team.png">\n                </ion-thumbnail>\n                <h2>Networking</h2>\n                <p>Networking opportunity</p>\n                <button ion-button clear item-end (click)="navnetworkpage()">Go</button>\n              </ion-item>\n\n            </ion-list>\n\n\n        <!--/ion-content-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/niemer/Documents/School/2017FQ/eecs394_orange/orange-gigbot/Gigbot/src/pages/main/main.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], MainPage);

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AudioRecorderState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PracticePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(567);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { MainPage } from '../main/main';


/**
 * Generated class for the PracticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AudioRecorderState;
(function (AudioRecorderState) {
    AudioRecorderState[AudioRecorderState["Ready"] = 0] = "Ready";
    AudioRecorderState[AudioRecorderState["Recording"] = 1] = "Recording";
    AudioRecorderState[AudioRecorderState["Recorded"] = 2] = "Recorded";
    AudioRecorderState[AudioRecorderState["Playing"] = 3] = "Playing";
})(AudioRecorderState || (AudioRecorderState = {}));
var PracticePage = (function () {
    function PracticePage(navCtrl, navParams, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.mediaPlugin = null;
        this.recorded = false;
    }
    Object.defineProperty(PracticePage.prototype, "MediaPlugin", {
        get: function () {
            if (this.mediaPlugin == null) {
                this.mediaPlugin = new __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* MediaPlugin */]('recording.wav');
            }
            return this.mediaPlugin;
        },
        enumerable: true,
        configurable: true
    });
    PracticePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PracticePage');
    };
    PracticePage.prototype.startRecording = function () {
        try {
            this.MediaPlugin.startRecord();
            this.state = AudioRecorderState.Recording;
            console.log("success startRecording");
        }
        catch (e) {
            this.showAlert(e.message);
        }
    };
    PracticePage.prototype.stopRecording = function () {
        try {
            this.MediaPlugin.stopRecord();
            this.state = AudioRecorderState.Recorded;
            this.recorded = true;
            console.log("success stopRecording");
        }
        catch (e) {
            this.showAlert(e.message);
        }
    };
    PracticePage.prototype.playRecording = function () {
        try {
            this.MediaPlugin.play();
            this.state = AudioRecorderState.Playing;
            console.log("success playRecording");
        }
        catch (e) {
            this.showAlert(e.message);
        }
    };
    PracticePage.prototype.stopRecordingPlay = function () {
        try {
            this.MediaPlugin.stop();
            this.state = AudioRecorderState.Ready;
            console.log("success stopRecordingPlay");
        }
        catch (e) {
            this.showAlert(e.message);
        }
    };
    PracticePage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    return PracticePage;
}());
PracticePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-practice',template:/*ion-inline-start:"/Users/niemer/Documents/School/2017FQ/eecs394_orange/orange-gigbot/Gigbot/src/pages/practice/practice.html"*/'<!--\n  Generated template for the PracticePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Interview Practice</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<img src="../../assets/imgs/interviewer.jpg" alt="Interviewer">\n\n<p>\n  <button ion-button full (click)="startRecording()">\n      Start recording</button>\n</p>\n\n<p>\n  <button ion-button full (click)="stopRecording()">\n    Stop recording</button>\n</p>\n\n\n<div *ngIf = "recorded">\n            <button ion-button (click)="playRecording()">\n             Start playback\n            </button>\n            <button ion-button (click)="stopRecordingPlay()">\n             Stop playback\n            </button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/niemer/Documents/School/2017FQ/eecs394_orange/orange-gigbot/Gigbot/src/pages/practice/practice.html"*/,
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
], PracticePage);

//# sourceMappingURL=practice.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
 * Generated class for the NetworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NetworkPage = (function () {
    function NetworkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NetworkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NetworkPage');
    };
    return NetworkPage;
}());
NetworkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-network',template:/*ion-inline-start:"/Users/niemer/Documents/School/2017FQ/eecs394_orange/orange-gigbot/Gigbot/src/pages/network/network.html"*/'<!--\n  Generated template for the NetworkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Network</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p>Networking content coming soon!</p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/niemer/Documents/School/2017FQ/eecs394_orange/orange-gigbot/Gigbot/src/pages/network/network.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], NetworkPage);

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 183:
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
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		845,
		4
	],
	"../pages/library/library.module": [
		846,
		3
	],
	"../pages/main/main.module": [
		847,
		2
	],
	"../pages/network/network.module": [
		848,
		1
	],
	"../pages/practice/practice.module": [
		849,
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
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.username = '';
        this.password = '';
        this.idInterview = '';
    }
    HomePage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.navigate = function () {
        //console.log('navigate!!!, idInterview',id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__main_main__["a" /* MainPage */]); //,{idInterview: id,});
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/niemer/Documents/School/2017FQ/eecs394_orange/orange-gigbot/Gigbot/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      Welcome to Gigbot!\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<!--\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n-->\n  <ion-card-content>\n\n    <ion-list>\n        <ion-item>\n          <ion-label floating>Username</ion-label>\n          <ion-input type="text" [(ngModel)]="username"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n        <!--ion-item>\n          <ion-label floating>ID Interview</ion-label>\n          <ion-input type="text" [(ngModel)]="idInterview"></ion-input>\n        </ion-item-->\n    </ion-list>\n    <!--ion-card>\n      <ion-card-header>Variables:</ion-card-header>\n      <ion-card-content>user: {{ username || \'None\' }}, ID Chat: {{ idInterview || \'-\' }}</ion-card-content>\n    </ion-card-->\n\n\n    <!--button ion-button [navPush]="ChatPage">Go To Chat</button-->\n    <button ion-button (click)="navigate()">Login</button>\n\n  </ion-card-content>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/niemer/Documents/School/2017FQ/eecs394_orange/orange-gigbot/Gigbot/src/pages/home/home.html"*/
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(475);


//import { MainPage } from '../main/main';
//
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//@Page({
//    templateUrl: 'build/pages/main/main.html'
//})
var MainPage = (function () {
    function MainPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_main_main__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_library_library__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_network_network__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_practice_practice__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(841);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var firebaseConfig = {
    apiKey: "AIzaSyAi43bPQCzb9g2EXzk32oqPuVJwyj_wHhs",
    authDomain: "orange-394-gigbot.firebaseapp.com",
    databaseURL: "https://orange-394-gigbot.firebaseio.com",
    projectId: "orange-394-gigbot",
    storageBucket: "orange-394-gigbot.appspot.com",
    messagingSenderId: "1029482160421"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_library_library__["a" /* LibraryPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_network_network__["a" /* NetworkPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_practice_practice__["a" /* PracticePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/library/library.module#LibraryPageModule', name: 'LibraryPage', segment: 'library', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/network/network.module#NetworkPageModule', name: 'NetworkPage', segment: 'network', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/practice/practice.module#PracticePageModule', name: 'PracticePage', segment: 'practice', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig, 'gigbot'),
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_library_library__["a" /* LibraryPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_network_network__["a" /* NetworkPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_practice_practice__["a" /* PracticePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/niemer/Documents/School/2017FQ/eecs394_orange/orange-gigbot/Gigbot/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/niemer/Documents/School/2017FQ/eecs394_orange/orange-gigbot/Gigbot/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[470]);
//# sourceMappingURL=main.js.map