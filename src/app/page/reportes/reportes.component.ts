import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,FormArrayName,FormArray } from '@angular/forms';
import { ReportesService } from 'src/app/servicios/reportes.service'



@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

myform:FormGroup;
reportes=[];

  constructor(private mf:FormBuilder,private reporServ:ReportesService) { 
    this.myform = this.mf.group({
       fecha:["",Validators.required],
      //  option:["",],
      //  grupo:["",]
      
     })
this.reportes = this.reporServ.getAll()
   
  }

  ngOnInit(): void {
  }


  // constructor(private mg:FormBuilder ,private procesosServ:ProcesosService) {
  //   this.mygrid = this.mg.group({
  //     fecha:["",Validators.required],
  //     option:["",],
  //     grupo:["",]
      
  //   })





  filter(){

    console.log('llegue')
  }

}
