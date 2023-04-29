import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { StorageService } from '../storage.service';
import { NgForm } from '@angular/forms';
import { GeneralUseService } from '../general-use.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent {



  constructor(private ar: ActivatedRoute, private Service: GeneralUseService, private storageService: StorageService) {

  }

  form: any = {
    city: null,
    tel: null,
    imagePath: null,
    role: "CLIENT"
  };

  public mail: any = "";

  ngOnInit() {
    this.mail = this.ar.snapshot.paramMap.get('email');
  }

  onSubmit(f: NgForm): void {
    const formValue = f.value
    formValue.imagePath = this.file.name;
    let fd = new FormData();
    fd = f.value;
    let file = new FormData();
    file.set("file",this.file,this.file.name)
    console.log(fd);
    console.log(f.value);
    console.log(this.mail);
    this.Service.modCustomer(fd, this.mail,file).subscribe((data: any) => {
      Swal.fire('Success')
    });

  }
  file!:File;

  onUploadFiles(x:any){
    console.log(x);
    this.file = x.target.files[0];
    const fileName: string = this.file.name;
    console.log(fileName);
  }

}
