import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import { StorageService } from '../storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'login',
  templateUrl: './login.Component.html',
  styleUrls: ['./login.Component.css']
})
export class LoginComponent {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: string = "";

  constructor(private r: Router, private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {

      console.log
      console.log(this.storageService.getUser().user)
      this.isLoggedIn = true;
      this.role = this.storageService.getUser().user.role;
      if (this.role == "CLIENT")
        this.r.navigateByUrl("/main")
      if (this.role == "SALLE7")
        this.r.navigateByUrl("/salle7")
      if (this.role == "ADMIN")
        this.r.navigateByUrl("/admin")
    }
  }

  logoutNg(): void {
    this.authService.logout().subscribe(() => {
      Swal.fire('Succss', 'Logout Success', 'success')
      this.storageService.clean();
      this.reloadPage("")
    });

  }

  onSubmit(f: NgForm): void {
    let fd = new FormData();
    fd = f.value;
    console.log(fd);
    console.log(f.value);
    this.authService.login(fd).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.role = this.storageService.getUser().user.role;
        Swal.fire({
          title: 'Welcome Back ' + this.storageService.getUser().user.firstname,
          confirmButtonText: 'thanks',
        }).then((result) => {
          if (result.isConfirmed) {
            if (this.role == "CLIENT")
              this.reloadPage("/main")
            if (this.role == "SALLE7")
              this.reloadPage("/salle7")
            if (this.role == "ADMIN")
              this.reloadPage("/admin")

          }
        })
      },
    });
  }

  reloadPage(url: string): void {
    if (url.length != 0) {
      this.r.navigateByUrl(url)
    }
    window.location.reload();
  }
}
