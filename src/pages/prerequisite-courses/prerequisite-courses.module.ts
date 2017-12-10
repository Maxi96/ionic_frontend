import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrerequisiteCoursesPage } from './prerequisite-courses';

@NgModule({
  declarations: [
    PrerequisiteCoursesPage,
  ],
  imports: [
    IonicPageModule.forChild(PrerequisiteCoursesPage),
  ],
})
export class PrerequisiteCoursesPageModule {}
