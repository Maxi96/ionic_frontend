import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListLecturersPage } from './list-lecturers';

@NgModule({
  declarations: [
    ListLecturersPage,
  ],
  imports: [
    IonicPageModule.forChild(ListLecturersPage),
  ],
})
export class ListLecturersPageModule {}
