import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListCoursesPage } from "../list-courses/list-courses";
import {ListLecturersPage} from "../list-lecturers/list-lecturers";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToListCourses(){
    this.navCtrl.push(ListCoursesPage);
  }

  goToListLecturers(){
    this.navCtrl.push(ListLecturersPage);
  }
}
