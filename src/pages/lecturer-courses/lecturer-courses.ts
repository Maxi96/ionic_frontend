import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LecturerProvider} from "../../providers/lecturer";
import {DetailCoursePage} from "../detail-course/detail-course";

/**
 * Generated class for the LecturerCoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lecturer-courses',
  templateUrl: 'lecturer-courses.html',
})
export class LecturerCoursesPage {

  public lecturer : any;
  public courses: any; // Array<{course_id: string, title: string, term: string, subject: string, courseLevel: string,capacity : number, available: number, credits: number, description : string, startDate: string, endDate: string, academicLevel :string, detailMeetingInfo:string, instructuralMethods:string, lecturer_id: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public lecturerProvider: LecturerProvider) {
    this.lecturer = navParams.get("lecturer");
    this.courses = [];
    this.getCourses();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LecturerCoursesPage');
  }

  goToDetailCourses(item){
    this.navCtrl.push(DetailCoursePage, {course:item});
  }

  getCourses(){
    if(this.lecturer.lecturer_id == null){
      this.lecturerProvider.loadCourses(this.lecturer)
        .then(data => {
          this.courses = data;
          console.log(this.courses);
        });
    }else {
      this.lecturerProvider.loadCourses(this.lecturer.lecturer_id)
        .then(data => {
          this.courses = data;
          console.log(this.courses);
        });
    }
  }

}
