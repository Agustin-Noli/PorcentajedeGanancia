import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcesosService {

  constructor() { }
 
getAll(){
  
return [{
  periodo:202007,
  empresas:"Galicia Seguros",
  rubro:"0011100",  
  concepto:"EFECTIVO Y DEPOSITOS EN BANCOS",   
  cotraparte:"Banco",
  moneda:"peso",
  saldo:-100000
},{
  periodo:202007,
  empresas:"Galicia Seguros",
  rubro:"0011100",  
  concepto:"EFECTIVO Y DEPOSITOS EN BANCOS",   
  cotraparte:"Banco",
  moneda:"peso",
  saldo:-100000

}
,{
  periodo:202007,
  empresas:"Galicia Seguros",
  rubro:"0011100",  
  concepto:"EFECTIVO Y DEPOSITOS EN BANCOS",   
  cotraparte:"Banco",
  moneda:"peso",
  saldo:-100000

}
,{
  periodo:202007,
  empresas:"Galicia Seguros",
  rubro:"0011100",  
  concepto:"EFECTIVO Y DEPOSITOS EN BANCOS",   
  cotraparte:"Banco",
  moneda:"peso",
  saldo:-100000

}
,{
  periodo:202007,
  empresas:"Tarjeta Naranja",
  rubro:"0011100",  
  concepto:"EFECTIVO Y DEPOSITOS EN BANCOS",   
  cotraparte:"Banco",
  moneda:"peso",
  saldo:-100000

}
,{
  periodo:202007,
  empresas:"Tarjeta Naranja",
  rubro:"0011100",  
  concepto:"EFECTIVO Y DEPOSITOS EN BANCOS",   
  cotraparte:"Banco",
  moneda:"peso",
  saldo:-100000

}
,{
  periodo:202007,
  empresas:"galicia seguros",
  rubro:"0011100",  
  concepto:"EFECTIVO Y DEPOSITOS EN BANCOS",              
  cotraparte:"Banco",
  moneda:"peso",
  saldo:-100000

}
,{
  periodo:202007,
  empresas:"Banco Provincia",
  rubro:"0011100",  
  concepto:"EFECTIVO Y DEPOSITOS EN BANCOS",   
  cotraparte:"Banco",
  moneda:"peso",
  saldo:-100000

},{
  periodo:202007,
  empresas:"Banco Provincia",
  rubro:"0011100",  
  concepto:"EFECTIVO Y DEPOSITOS EN BANCOS",   
  cotraparte:"Banco",
  moneda:"peso",
  saldo:-100000

},{
  periodo:202007,
  empresas:"Banco Provincia",
  rubro:"0011100",  
  concepto:"EFECTIVO Y DEPOSITOS EN BANCOS",   
  cotraparte:"Banco",
  moneda:"peso",
  saldo:-100000

}

]}  

grupos(){
return ["Todos","filiales del exterior","subsidiarias del exterior","empresas vinculadas" ]
    
// return[
//   {
//       "empCodigo": 1,
//       "empDescripcion": "B.G.B.A. (interco)",
//       "gempId": 1,
//       "empPorcentaje": 10000.00,
//       "gemp": null
//   },
//   {
//       "empCodigo": 2,
//       "empDescripcion": "Tarjeta Naranja S.A. (interco)",
//       "gempId": 2,
//       "empPorcentaje": 10000.00,
//       "gemp": null
//   },
//   {
//       "empCodigo": 3,
//       "empDescripcion": "Tarjetas Cuyanas S.A. (interco)",
//       "gempId": 2,
//       "empPorcentaje": 10000.00,
//       "gemp": null
//   },
//   {
//       "empCodigo": 4,
//       "empDescripcion": "Tarjetas Regionales S.A. (interco)",
//       "gempId": 2,
//       "empPorcentaje": 10000.00,
//       "gemp": null
//   },
//   {
//       "empCodigo": 5,
//       "empDescripcion": "T.R.S.A. (interco)",
//       "gempId": 3,
//       "empPorcentaje": 5797.00,
//       "gemp": null
//   }
// ]




}

empresas(){
  
  return ["Galicia Seguros","Banco Galicia","Banco Interco","Banco Provincia" ]
    
}







}