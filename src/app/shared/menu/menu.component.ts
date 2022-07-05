import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string,
  texto: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [

    `
    li{
      cursor: pointer;
    }

    `
  ]
})
export class MenuComponent implements OnInit {

  menu: MenuItem[] = [
    { ruta: '/graficas/barra', texto: 'Barras' },
    { ruta: '/graficas/graficas-doble', texto: 'Graficas Doble'},
    { ruta: '/graficas/dona', texto: 'Dona' },
    { ruta: '/graficas/dona-http', texto: 'Dona HTTP' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
