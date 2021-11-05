import { Component, OnInit } from '@angular/core';
import { MonedaService} from 'src/app/servicios/moneda.service'
import * as $ from 'jquery';

@Component({
  selector: 'app-moneda',
  templateUrl: './moneda.component.html',
  styleUrls: ['./moneda.component.css']
})
export class MonedaComponent implements OnInit {

moneda=[];
costo :number ;
resultadoUno :number ;
resultadoDos :number ;
porcentaje :number ;
total :number ;
totalGanancia :number ;

precioFinal :number ;
porcentajeDos :number ;
ganancia :number ;
descuento :number ;
  constructor(private monedaServ:MonedaService) { 

    this.moneda=this.monedaServ.getAll();
  }

  ngOnInit(): void {
  }

  calculoCosto(){

    if(this.porcentaje != null){

      this.resultadoUno = 100 - this.porcentaje;
      this.resultadoDos = this.resultadoUno /100 ;
     
      let temporalTotal = this.costo /this.resultadoDos;
      this.total = parseFloat(temporalTotal.toFixed(2));
      
      let tempotalGanancia = this.total - this.costo;
      this.totalGanancia = parseFloat(tempotalGanancia.toFixed(2));

    }else{
      this.total = 0;
      this.totalGanancia = 0;
    }
  

  }

  calculoPorcentaje(){  
       if(this.costo != null){
    this.resultadoUno = 100 - this.porcentaje;
    this.resultadoDos = this.resultadoUno /100 ;
   
    let temporalTotal = this.costo /this.resultadoDos;
    this.total = parseFloat(temporalTotal.toFixed(2));
    
    let tempotalGanancia = this.total - this.costo;
    this.totalGanancia = parseFloat(tempotalGanancia.toFixed(2));
       }else{

        this.total = 0;
        this.totalGanancia = 0;

       }
  }


  calculoPrecioFinal(){

    if(this.porcentajeDos != null){
      let temporalPrecioFinal;
     
      temporalPrecioFinal = this.porcentajeDos / 100  ;
      this.descuento = this.precioFinal * temporalPrecioFinal;
      
      let gnancian
      gnancian =this.precioFinal - this.descuento
       this.ganancia =parseFloat(gnancian.toFixed(2));
    }else{
      this.descuento = 0;
      this.ganancia = 0;
    }
  

  }


  calculoPorcentajeDos(){

    if(this.precioFinal != null){
      let temporalPrecioFinal;
     
      temporalPrecioFinal = this.porcentajeDos / 100  ;
      this.descuento 
      let desc= this.precioFinal * temporalPrecioFinal;
      this.descuento = parseFloat(desc.toFixed(2));
      let gnancian
      gnancian =this.precioFinal - this.descuento
       this.ganancia =parseFloat(gnancian.toFixed(2));
    }else{
      this.descuento = 0;
      this.ganancia = 0;
    }
  }



}
