import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoursesProvider } from '../../providers/courses';

/**
 * Generated class for the ListCoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-courses',
  templateUrl: 'list-courses.html',
})
export class ListCoursesPage {

  public xmlItems : any;

  constructor(public navCtrl: NavController, public navParams: NavParams , public coursesProvider: CoursesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListCoursesPage');
  }

  ionViewWillEnter(){
    this.coursesProvider.loadXML()
      .then(data => {
        this.xmlItems = JSON.parse(data._body);
      });
  }

}
