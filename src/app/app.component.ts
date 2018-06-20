import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string;
  edad: number;
  miArreglo = [
    {nombre: 'Eduardo', edad: 28},
    {nombre: 'Víctor', edad: 25},
    {nombre: 'Anita', edad: 17},
    {nombre: 'Juanito', edad: 12}
  ];
  persona1 = {nombre: 'Juanito', edad: 22};
  persona2 = {nombre: 'Anita', edad: 17};
  usuarios = [
    {nombre: 'Anita', cal: 72},
    {nombre: 'Juanito', cal: 68}
  ];
  nombreUsuario: string;
  calUsuario: number;
  currentUser = {
    nombre: null,
    cal: null
  };
  seleccionarUsuario(usuario) {
    this.currentUser = usuario;
  }
  eliminarUsuario(i) {
    this.usuarios.splice(i, 1);
  }
  agregarUsuario() {
    this.usuarios.push(this.currentUser);
    this.nombreUsuario = null;
    this.calUsuario = null;
  }
  imprimirArreglo() {
    console.log(this.miArreglo);
    this.miArreglo.forEach( (elemento) => {
      console.log(elemento);
    } );
  }
  saludar() {
    alert('Hola ' + this.nombre);
  }
  mostrarEdad() {
    console.log(this.edad);
  }
}
//app.module.ts -> app.component.ts -> app.component.html
//Módulos -> Componentes
