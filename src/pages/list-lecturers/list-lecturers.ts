import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LecturerProvider} from "../../providers/lecturer";
import {LecturerCoursesPage} from "../lecturer-courses/lecturer-courses";

/**
 * Generated class for the ListLecturersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-lecturers',
  templateUrl: 'list-lecturers.html',
})
export class ListLecturersPage {

  public lecturer: Array<{lecturer_id: number, name: string, emailAddress: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public lecturerProvider: LecturerProvider) {
    this.lecturer = [];
  }

  ionViewWillEnter(){
    console.log("Enter ListLecturersPage.");
    this.getLecturers();
  }

  getLecturers(){
    this.lecturerProvider.load()
      .then(data => {
        this.lecturer = data;
      });
  }

  goToLecturerCourses(lecturer){
    this.navCtrl.push(LecturerCoursesPage, {lecturer: lecturer});
  }

}
