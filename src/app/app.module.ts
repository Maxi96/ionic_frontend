import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CoursesProvider } from '../providers/courses';
import { ListCoursesPage } from "../pages/list-courses/list-courses";
import {DetailCoursePage} from "../pages/detail-course/detail-course";
import {ViewerPage} from "../pages/viewer/viewer";
import { LecturerProvider } from '../providers/lecturer';
import {ListLecturersPage} from "../pages/list-lecturers/list-lecturers";
import {LecturerCoursesPage} from "../pages/lecturer-courses/lecturer-courses";
import {PrerequisiteCoursesPage} from "../pages/prerequisite-courses/prerequisite-courses";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListCoursesPage,
    DetailCoursePage,
    ViewerPage,
    ListLecturersPage,
    LecturerCoursesPage,
    PrerequisiteCoursesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListCoursesPage,
    DetailCoursePage,
    ViewerPage,
    ListLecturersPage,
    LecturerCoursesPage,
    PrerequisiteCoursesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CoursesProvider,
    LecturerProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
