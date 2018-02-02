import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iam',
  templateUrl: './iam.component.html',
  styleUrls: ['./iam.component.css']
})
export class IamComponent implements OnInit {
  imagex:string = "";


  constructor() { }

  ngOnInit() {
    
  }
  moverMexico(div:number){
    switch(div){
      case 0:
      this.imagex ="url('/assets/img/yo/1.jpg')";
      break;
      case 1:
      this.imagex ="url('/assets/img/yo/2.jpg')";
      break;
      case 2:
      this.imagex ="url('/assets/img/yo/3.jpg')";
      break;
      case 3:
      this.imagex ="url('/assets/img/yo/4.jpg')";
      break;
      case 4:
      this.imagex ="url('/assets/img/yo/5.jpg')";
      break;
      case 5:
      this.imagex ="url('/assets/img/yo/6.jpg')";
      break;
      case 6:
      this.imagex ="url('/assets/img/yo/7.jpg')";
      break;
      case 7:
      this.imagex ="url('/assets/img/yo/8.jpg')";
      break;
      case 8:
      this.imagex ="url('/assets/img/yo/9.jpg')";
      break;
    }
    
  }
  byeMexico(){
    //this.imagex ="url('/assets/img/yo/5.jpg')";
    this.imagex ="";
  }
  byeBye(){
    this.imagex ="";
  }


}
