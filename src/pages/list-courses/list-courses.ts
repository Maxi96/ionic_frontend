import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoursesProvider } from '../../providers/courses';
import {DetailCoursePage} from "../detail-course/detail-course";

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

  public courses: Array<{course_id: string, title: string, term: string, subject: string, courseLevel: string,capacity : number, available: number, credits: number, description : string, startDate: string, endDate: string, academicLevel :string, detailMeetingInfo:string, instructuralMethods:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams , public coursesProvider: CoursesProvider) {

    this.courses = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListCoursesPage');
  }

  ionViewWillEnter(){
    console.log("IonViewWillEnter");
    this.getCourses();
  }

  getCourses(){
    this.coursesProvider.load()
      .then(data => {
        //let dataCourses = JSON.parse(data);
        this.courses = data;
      });
  }

  goToDetailCourses(item){
    this.navCtrl.push(DetailCoursePage, {course:item});
  }

}
