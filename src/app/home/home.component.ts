import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  front:any[] =[{tec:"Android",tot:"más de 5"},{tec:"Angular",tot:"3"},{tec:"Asp",tot:"3"},{tec:"Csharp",tot:"más de 5"},{tec:"Css3",tot:"más de 10"},{tec:"Html5",tot:"más de 10"},{tec:"Ionic",tot:"1"},{tec:"Javascript",tot:"más de 10"},{tec:"Jquery",tot:"más de 10"},{tec:"React",tot:"1"},{tec:"Php",tot:"más de 5"}];
  bd:any[] = [{tec:"Firebase"},{tec:"MongoDB"},{tec:"Mssql"},{tec:"Mysql"},{tec:"Sqlite"}];
  other:any[] = [{tec:"Arduino"},{tec:"Python"}]

  constructor() { }

  ngOnInit() {
  }

}
