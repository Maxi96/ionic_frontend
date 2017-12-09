import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListCoursesPage } from './list-courses';

@NgModule({
  declarations: [
    ListCoursesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListCoursesPage),
  ],
})
export class ListCoursesPageModule {}
