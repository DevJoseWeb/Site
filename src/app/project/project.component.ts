import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: any[] = [
    {title:"un programador",sub:"blog",letter:"UP",describe:"Un programador es un blog orientado a la programación, la idea fue rápida, explicar temas de programación de forma muy sencilla y paso a paso, otros casos se publican trabajos o trucos que se trabaja día a día y algunas app para desarrolar",photo:"unprogramador.png",url:"https://unprogramador.com"},
    {title:"Call out / bloqueador de llamada",sub:"app",letter:"CO",describe:"App para bloquear llamadas, fue desarrollada con la idea de bloquear esas llamadas tan molestas ya que android 5 y 6 no tienen bloqueo nativo, código esta dispobible para analizarlo.",photo:"blockapp.png",url:"https://play.google.com/store/apps/details?id=unprogramador.com.calloutexpress"},
    {title:"Web 1.0",sub:"web",letter:"W1",describe:"Primera versión de esta página web, esta construido con html, css3, js y php",photo:"home1080.jpg",url:"http://cesarflores.xyz/cesarv1/"},
    {title:"GitLab",sub:"repositorio",letter:"GL",describe:"En este repositorio pongo proyectos, pruebas o tutoriales que voy realizando.",photo:"gitlab.png",url:"https://gitlab.com/users/shingrey/projects"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
