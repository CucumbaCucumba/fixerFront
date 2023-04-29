import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth-service.service';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private r:Router, private authService: AuthService, private storageService: StorageService){
    
  }

  form: any = {
    firstname:null,
    lastname:null,
    email: null,
    password: null,
    role:"CLIENT"
  };

  onSubmit(f:NgForm): void {
    let fd = new FormData();
    fd=f.value;
    console.log(fd);
    console.log(f.value);
    this.authService.signUp(fd).subscribe({
      next: data => {
        Swal.fire({
          title: 'A Verification Mail has been sent',
          confirmButtonText: 'thanks',
        }).then((result) => {
          this.r.navigateByUrl("/")
        })
      }
    })
    
  }
}
