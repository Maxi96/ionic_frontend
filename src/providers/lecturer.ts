import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LecturerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LecturerProvider {

  data: any;

  constructor(public http: HttpClient) {
    this.data = null;
  }


  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('http://localhost:3000/lecturer')
        .map(res => res)
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          this.data = null;
        });
    });
  }

  loadCourses(data) {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('http://localhost:3000/lecturer/'+ data.toString())
        .map(res => res)
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          this.data = null;
        });
    });
  }

}
