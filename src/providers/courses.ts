import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';

/*
  Generated class for the ListCoursesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoursesProvider {

  data: any;

  constructor(public http: HttpClient) {
    this.data = null;
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('http://35.227.102.126:9000/courses')
        .map(res => res)
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          this.data = null;
        });
    });
  }

  loadXML(){
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('http://35.227.102.126:9000/xml/courses')
        .map(res => res)
        .subscribe((data) =>
        {
          this.parseXML(data).then((data) =>{
            this.data = data;
            resolve(this.data);
            this.data = null;
          })
        });
    });
  }

  loadDetailsXML(data){
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('http://35.227.102.126:9000/xml/courseDetail/' + data.toString())
        .map(res => res)
        .subscribe((data) =>
        {
          this.parseXML(data).then((data) =>{
            this.data = data;
            resolve(this.data);
            this.data = null;
          })
        });
    });
  }

  loadDetails(data) {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('http://35.227.102.126:9000/courseDetail/'+ data.toString())
        .map(res => res)
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          this.data = null;
        });
    });
  }

  loadPreRequisites(data) {

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('http://35.227.102.126:9000/coursePre/'+ data.toString())
        .map(res => res)
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          this.data = null;
        });
    });
  }



  loadXMLPreRequesite(data){
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('http://35.227.102.126:9000/xml/coursePre/'+ data.toString())
        .map(res => res)
        .subscribe((data) =>
        {
          this.parseXML(data).then((data) =>{
            this.data = data;
            resolve(this.data);
            this.data = null;
          })
        });
    });
  }

  parseXML(data){
    return new Promise(resolve => {
      var k,
        arr = [],
        parser = new xml2js.Parser({
          trim: true,
          explicitArray: true
        });
      parser.parseString(data, function (err,result) {
        var obj = result.courses;
        for(k in obj.courses){
          var item = obj.actualEntries[k];
          arr.push({
            id                  : item.id[0],
            title               : item.title[0],
            term                : item.term[0],
            courseLevel         : item.courseLevel[0],
            capacity            : item.capacity[0],
            available           : item.available[0],
            credits             : item.credits[0],
            description         : item.description[0],
            startDate           : item.startDate[0],
            endDate             : item.endDate[0],
            academicLevel       : item.academicLevel[0],
            detailMeetingInfo   : item.detailMeetingInfo[0],
            instructionMethods  : item.instructionMethods[0],
            supplies            : item.supplies[0]
          });
        }
        resolve(arr);
      });
    });
  }

}
