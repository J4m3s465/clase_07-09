import { Component, inject, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username:any;
  password:any;
  service = inject(UsuariosService)

  login(form: NgForm){
    
      console.log(form.value)
    this.service.login(form.value).subscribe( u =>{
      console.log(u)

      if(u.accessToken!=''){

        sessionStorage.setItem("login", "true")

        window.location.href = 'confidencial'

      }
    })
  }

}
