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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListCoursesPage,
    DetailCoursePage
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
    DetailCoursePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CoursesProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
