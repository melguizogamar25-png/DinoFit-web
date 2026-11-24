import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-login-page-component',
  styleUrl: './login-page-component.css',
  templateUrl: './login-page-component.html',
})
export class LoginPageComponent {

  verContrasena = false;

  alternarContrasena(): void {
    this.verContrasena = !this.verContrasena;
  }
  
}
