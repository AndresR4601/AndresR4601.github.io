import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExperience : Array<any> = [];
  constructor(){}
  ngOnInit() : void {
  
    let work1 = {
      fecha : "2013-2019", 
      ubicacion : "San Jose, CR",
      puesto : "Estudiante",
      empresa : "BVS",
      logros : [
        {descripcion : "US Diploma"},
        {descripcion: "Valedictorian"}
      ]
    };

    let work2 = {
      fecha : "2020-2023", 
      ubicacion : "Monterrey, NL",
      puesto : "Estudiante",
      empresa : "ITESM",
      logros : [
        {descripcion : "Campeón Intramuros"},
        {descripcion: "Alto promedio"}
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
  }
}
 