import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LecturerCoursesPage } from './lecturer-courses';

@NgModule({
  declarations: [
    LecturerCoursesPage,
  ],
  imports: [
    IonicPageModule.forChild(LecturerCoursesPage),
  ],
})
export class LecturerCoursesPageModule {}
