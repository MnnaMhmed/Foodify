import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  constructor(private router: Router) {}


  name: string = '';
  email: string = '';
  password: string = '';

  register() {
    console.log({
      name: this.name,
      email: this.email,
      password: this.password
      
    });
      this.router.navigate(['/']);

  }
}