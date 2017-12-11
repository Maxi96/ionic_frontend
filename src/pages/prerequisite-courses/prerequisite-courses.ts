import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CoursesProvider} from "../../providers/courses";
import {DetailCoursePage} from "../detail-course/detail-course";

/**
 * Generated class for the PrerequisiteCoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prerequisite-courses',
  templateUrl: 'prerequisite-courses.html',
})
export class PrerequisiteCoursesPage {

  course : any;
  public courses: any;//Array<{course_id: string, title: string, term: string, subject: string, courseLevel: string,capacity : number, available: number, credits: number, description : string, startDate: string, endDate: string, academicLevel :string, detailMeetingInfo:string, instructuralMethods:string, course_id1: string, course_id_prerequisite: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public courseProvider: CoursesProvider) {
    this.course = navParams.get("course");
    this.courses = [];
    this.getCourses();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrerequisiteCoursesPage');
  }

  getCourses(){
    // this.courseProvider.loadPreRequisites(this.course.course_id)
    //   .then(data => {
    //     this.courses = data;
    //   });

    this.courseProvider.loadXMLPreRequesite(this.course.course_id)
      .then(data => {
        this.courses = data;
      });

  }

  goToDetailCourses(item){
    this.navCtrl.push(DetailCoursePage, {course:item});
  }

}
