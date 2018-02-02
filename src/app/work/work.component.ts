import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  works:any[] = [
    { name: "SoftwareRB", dev: "Angular, Android, c#", year: "2016 - actualidad"},
  {name: "Grupo Copico", dev: "PHP, SEO, ActionScript", year: "2014 - 2016"},
  {name: "Induxsoft", dev: "C#, .NET", year: "2014"},
  {name: "TG Software", dev: "Android, PHP", year: "2013"},
  {name: "CAM", dev: "Android, Electronica", year: "2013"}
  ];
  step = 10;
  nwork:number = (this.works.length)-1;
  srb = [{name:"SRB Web",dev:"html, css, js, php",photo:"srb.jpg",url:"http://softwarerb.com/"},{name:"Talking to Styles 2.0",dev:"Android",photo:"talking.jpg",url:"https://play.google.com/store/apps/details?id=softwarerb.com.effectiveness"},{name:"Independencia app",dev:"Android",photo:"independencia.jpg",url:"https://play.google.com/store/apps/details?id=com.softwarerb.stmandroid.stm"},{name:"Cisco",dev:"html, css, js, svg",photo:"cisco.jpg", url:"http://www.cisco.com/c/m/en_us/about/careers/university/index.html"}];
  copico = [{name:"Copico Web",dev:"html, css, js",photo:"copico.jpg",url:"http://grupocopico.com/"},{name:"Aprosi",dev:"php, js",photo:"aprosi.jpg",url:"http://www.aprosi.com.mx/"},{name:"Casa lum web",dev:"html, css, js, php",photo:"casalum.jpg",url:"https://casalum.com/"},{name:"Reportes casalum",dev:"php, css, js, mysql",photo:"logo22.jpg",url:"#"},{name:"Documentos fiscales Comex",dev:"php, As, mysql",photo:"documentoscopico.jpg",url:"http://copicocorp.com/DocumentosFiscales/"},{name:"Generador de código",dev:"php, css, js, mysql",photo:"logo22.jpg",url:"#"}];
  induxsoft = [{name:"nomicloud",dev:"html, css, js, .net",photo:"nomicloud.jpg",url:"http://https://apps.induxsoft.net/rh/login.Aspx"}];
  tg = [{name:"Dish layouts",dev:"android",photo:"logo22.jpg",url:"#"}];
  cam = [{name:"silla de rueda",dev:"Android, arduino",photo:"silla.jpg",url:"https://www.youtube.com/watch?v=nGmH1jKwIIQ"}];
  timer: any;

  constructor() { }

  ngOnInit() {
    
    this.timer = setTimeout(() =>{
      this.setStep(0);
    },800);
  }
  setStep(index: number) {
      this.step = index;
  }
  nextStep() {
      this.step++;
  }
  prevStep() {
      this.step--;
  }

}
