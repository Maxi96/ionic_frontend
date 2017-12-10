import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewer',
  templateUrl: 'viewer.html',
})
export class ViewerPage {

  data : any;
  description :any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get("data");
    this.description = this.navParams.get("description");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewerPage');
  }
}
