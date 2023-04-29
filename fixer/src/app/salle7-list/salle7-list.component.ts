import { Component } from '@angular/core';
import { Salle7 } from '../Models/Salle7';
import { GeneralUseService } from '../general-use.service';

@Component({
  selector: 'app-salle7-list',
  templateUrl: './salle7-list.component.html',
  styleUrls: ['./salle7-list.component.css']
})
export class Salle7ListComponent {

  constructor(private gs:GeneralUseService){
  }
  
  ListSalle7s : Salle7[]=[]
  curPage:number=0;

  ngOnInit():void{
    this.gs.getSalle7(this.curPage).subscribe((data:any)=>{
      this.ListSalle7s = data._embedded.salle7s
      console.log(this.ListSalle7s)
    })
  }


}
