import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  data : any = []

  constructor(private service : InformationService) { }

  ngOnInit(): void {
    // this.onEdit(sesNumber)
   
  }
  

  onEdit(sesNumber: string){
    this.data =  this.service.ApiInfo()
    // .subscribe((res)=>{
    //   this.data = res
    //   this.data = this.data.data.content
    //   // this.data = this.data.sesNumber
      
    //   console.log(this.data,'service info')
    //   let currentInfo = this.data.find((item)=>{return item.sesNumber === sesNumber})
    //   console.log(currentInfo,'information')
    // })
  }
}
