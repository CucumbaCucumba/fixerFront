import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { GeneralUseService } from '../general-use.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-valid-salle7',
  templateUrl: './valid-salle7.component.html',
  styleUrls: ['./valid-salle7.component.css']
})
export class ValidSalle7Component {

  constructor(private ar: ActivatedRoute, private Service: GeneralUseService, private storageService: StorageService){

  }

  form: any = {
    firstname:null,
    lastname:null,
    email: null,
    password: null,
    city: null,
    tel: null,
    imagePath: null,
    role: "CLIENT",
    rate: null
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
    console.log(f.value.mail);
    this.Service.modSalle7(fd, f.value.mail,file).subscribe((data: any) => {
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
