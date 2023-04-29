import { Component } from '@angular/core';
import { StorageService } from './storage.service';
import { AuthService } from './auth-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private r: Router, private authService: AuthService, private ss: StorageService) {

  }

  title = 'BestProjectSoFar';
  role = '';
  name = '';
  isLoggedIn = false;
  ngOnInit(): void {
    this.isLoggedIn = this.ss.isLoggedIn();
    console.log(this.isLoggedIn)
    if (this.isLoggedIn) {
      this.role = this.ss.getUser().user.role
      this.name = this.ss.getUser().user.firstname
    }
  }

  logoutNg(): void {
    this.authService.logout().subscribe(() => {
      Swal.fire('Succss', 'Logout Success', 'success').then(()=>{  
      this.ss.clean();
      this.reloadPage("/")
      })

    });

  }
  reloadPage(url: string): void {
    if (url.length != 0) {
      this.r.navigateByUrl(url)
    }
    window.location.reload();
  }
}
