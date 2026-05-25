import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) {}

  login() {

    if(this.email === 'admin@gmail.com' &&
       this.password === '123456') {

      this.toastr.success('Login Success');

      this.router.navigate(['/admin']);

    } else {

      this.toastr.error('Invalid Credentials');

    }

  }

}