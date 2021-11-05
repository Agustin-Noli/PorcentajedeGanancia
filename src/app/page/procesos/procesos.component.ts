import { Component, OnInit } from '@angular/core';
import { ProcesosService } from 'src/app/servicios/procesos.service'
import { FormBuilder, FormGroup,Validators,FormArrayName,FormArray } from '@angular/forms';

@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.component.html',
  styleUrls: ['./procesos.component.css']
})
export class ProcesosComponent implements OnInit {
  proceso=[];
  check=[];
  mygrid:FormGroup
  info:string;
  filterProceso=[];
  fecha:string;
  show:boolean=false;
  grupo:string;
  
  calculo:boolean=false;
  txt:boolean=false;
  datos;
  datosg;

  // Seleccionamos o iniciamos el valor '0' del <select>

  constructor(private mg:FormBuilder ,private procesosServ:ProcesosService) {
    this.mygrid = this.mg.group({
      fecha:["",Validators.required],
      option:["",],
      grupo:["",]
      
    })
    
   this.proceso= this.procesosServ.getAll();
   this.datos = this.procesosServ.empresas();
   this.datosg =this.procesosServ.grupos();
   



   }
   calcular(){
    this.calculo = true;

    setTimeout(()=>{
          this.calculo = false;
     }, 2000);
  }

mjtxt(){
    this.txt = true;

    setTimeout(()=>{            
          this.txt = false;
     }, 5000);
  }

onChange(){
console.log(this.datosg)

}



  //  onChange(id:string, isChecked: boolean) {
  // debugger

  //   if(isChecked) {
  //      this.check.push(id)
  //     // console.log(this.check)
  //   } else {

  //     var index = this.check.indexOf( id );
 
  //     if ( index !== -1 ) {
  //         this.check.splice( index, 1 );
  //     }
  //   }
  // }


   Importar(){

      console.log(this.check)
      this.show=true
   }

   filter(){
   debugger
    this.info=this.mygrid.value.grupo;
    // this.fecha=this.mygrid.value.fecha ;
    // this.grupo=this.mygrid.value.grupo;
    // var rfecha =  this.fecha.replace("-", "")
    
    // console.log(rfecha);
    // console.log(this.info);
     console.log(this.grupo);
    this.filterProceso= [this.info]
   this.show=true
  

   }
  ngOnInit(): void {
  }

}
