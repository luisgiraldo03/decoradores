import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  usuarios = [];

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((datos: any[]) => this.usuarios = datos);
  }

  constructor(private http: HttpClient) {

  }

  borrarUsuario(id: number){
    this.usuarios = this.usuarios.filter(usr => usr.id != id);
  }

}
