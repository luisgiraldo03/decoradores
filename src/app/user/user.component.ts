import { Component, EventEmitter, Host, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: any;
  @Output() borrar = new EventEmitter<number>();

  constructor(
    @Host() private _app: AppComponent
  ) {
    console.log(_app)
   }

  ngOnInit(): void {
  }

  /*borrarUsuario(id: number){
    this.borrar.emit(id);
  }*/

  borrarUsuario(id: number){
    this._app.usuarios = this._app.usuarios.filter(usr => usr.id != id);
  }

}
