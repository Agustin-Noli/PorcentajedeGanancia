import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,FormArrayName,FormArray } from '@angular/forms';

 @Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit {
  myfilter:FormGroup
  constructor(private mf:FormBuilder) {
    this.myfilter = this.mf.group({

      fecha:["",Validators.required]
    })
   }

  // constructor(private mg:FormBuilder ,private procesosServ:ProcesosService) {
  //   this.mygrid = this.mg.group({
  //     fecha:["",Validators.required],
  //     option:["",]
  //   })
    
  filter(){

    console.log('llegue')
  }
  ngOnInit(): void {
  }

}
