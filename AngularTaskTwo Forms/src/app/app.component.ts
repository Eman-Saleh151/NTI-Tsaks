import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lec15';
  courseName:String ="Angular";
  inputType: string ="password";
  isDisplay:Boolean= true;
  className:string = "form-control"
  elementText:string="Lorem ipsum dolor sit amet consectetur."
  textRed:string="red"
  textColorFlag :Boolean= false;
  imgPath:string="assets/images/rose.jpg"


  getCourseName(){
    return "hello"
  }

  getFullName(fN:string , lN:string){
    return `${fN} ${lN}`
  }

  changeImage(){
    this.imgPath="assets/images/pinkyRose.jpg"
  }

}
