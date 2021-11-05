import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonedaService {

  constructor() { }
getAll(){
return [{
    codigo:1,
    descripcion:"Peso Argentino",
    cotizacion:"1"
  
      },{
    codigo:2,
    descripcion:"Dolar Americano",
    cotizacion:"200"

      }
    ,{
  codigo:3,
  descripcion:"Real",
  cotizacion:"93"

    }
     ]}

}
