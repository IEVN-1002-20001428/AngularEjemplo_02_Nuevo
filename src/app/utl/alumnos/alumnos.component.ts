import { Component, OnInit } from '@angular/core';
import { AlumnosUtl } from 'src/app/interfaces/utl';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  imageWidth: number = 50;
  imageMargin: number = 2;
  muestraImg: boolean = true;
  listFilter: string = '';
  alumnoTitle !: string;
  dataSource: any = [];

  showImage(): void {
    this.muestraImg = !this.muestraImg;
  }

  alumnosIEVN: AlumnosUtl[] = [
    {
      "amaterno": "Rojas",
      "apaterno": "Hernández",
      "correo": "fede@gmail.com",
      "matricula": 100,
      "nombre": "Federico"
    },
    {
      "amaterno": "Zuñiga",
      "apaterno": "Fernández",
      "correo": "amanda@gmail.com",
      "matricula": 101,
      "nombre": "Amanda"
    },
    {
      "amaterno": "Muñoz",
      "apaterno": "Sanchez",
      "correo": "javier@gmail.com",
      "matricula": 102,
      "nombre": "Javier"
    }
  ]

  ngOnInit(): void {
    this.dataSource = this.alumnosIEVN
  }

}
