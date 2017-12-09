import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListCoursesPage } from "../list-courses/list-courses";

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
}
