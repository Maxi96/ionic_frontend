import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoursesProvider } from '../../providers/courses';
import {ViewerPage} from "../viewer/viewer";
import {PrerequisiteCoursesPage} from "../prerequisite-courses/prerequisite-courses";
import {LecturerCoursesPage} from "../lecturer-courses/lecturer-courses";

/**
 * Generated class for the DetailCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-course',
  templateUrl: 'detail-course.html',
})
export class DetailCoursePage {

  public course : any;
  public startDate :any;
  public endDate: any;
  //public courses: Array<{course_id: string, title: string, term: string, subject: string, courseLevel: string,capacity : number, available: number, credits: number, description : string, startDate: string, endDate: string, academicLevel :string, detailMeetingInfo:string, instructuralMethods:string, lecturer_id: number, name: string, emailAddress: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public courseProvider: CoursesProvider) {
    this.course = this.navParams.get("course");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailCoursePage');
  }

  ionViewWillEnter(){
    this.getCourses();
  }

  getCourses(){
    this.courseProvider.loadDetailsXML(this.course.course_id)
      .then(data => {
        this.course = data;
        console.log(this.course);
      });
    this.startDate = this.createDateString(this.course.startDate);
    this.endDate = this.createDateString(this.course.endDate);
  }

  createDateString(timestamp: any) {
    timestamp = timestamp + "000";
    let d = new Date(parseInt(timestamp));
    let m = d.getMonth() + 1;
    let year = d.getFullYear();
    let month = m < 10 ? "0" + m : m;
    let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
    let fullString = year + "-" + month + "-" + day;

    return fullString;
  }

  goToViewer(description, data){
    this.navCtrl.push(ViewerPage, {description:description,data:data});
  }

  goToPreCourses(data){
    this.navCtrl.push(PrerequisiteCoursesPage, {course:data});
  }

  goToLecturer(){
    this.navCtrl.push(LecturerCoursesPage, {"lecturer": this.course.lecturer_id});
  }

}
