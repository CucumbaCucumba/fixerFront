import { Component } from '@angular/core';
import { GeneralUseService } from '../general-use.service';
import { Salle7 } from '../Models/Salle7';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent {

  constructor(private r: Router,private gs:GeneralUseService){
  }
  
  ListSalle7s : Salle7[]=[]
  curPage:number=0;
  
  ngOnInit():void{
    this.gs.getSalle7(0).subscribe((data:any)=>{
      this.ListSalle7s = data._embedded.salle7s
      console.log(this.ListSalle7s)
    })
  }

  reloadPage(): void {
    window.location.reload();
  }

}
