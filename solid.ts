/* S: Principio de Resp unica
El nombre que le pongo a la clase es lo que define la resposabilidad
 */

const main1 = function () {
  class Coche{
    marca: string;
    patente: number;
  /*   al constructor generalmente le paso los atributos
    si no se los paso mÃ s adelante hago un mÃĻtodo que permita modificarlo  */
    constructor (marca:string){
      this.marca = marca;
    }
    getMarcaCoche(): string{
      return this.marca; 
    }
    setPatente(patente:number): void{
      this.patente = patente; 
    }
  }


  console.log("main Principio Respuesta Unica")
  
}

// O: Principio abierto/cerrado

/* Sea mas facil de extender sin necesidad de generar
muchas implicancias de corregir en el cÃēdigo (Herencia de clases
  para solo poner una propiedad de la clase abstracta) */
/* Cerrado porque se quiere indicar que el 
precio es una propiedad de cada uno de los autos */

// Ejemplo con error
const mainPacError = function () {
  class Coche {
    marca: string;
    
    constructor(marca: string) {
      this.marca = marca;
    }
    getMarcaCoche(): string {
      return this.marca;
    }
    
  }
  
  const imprimirPrecio = function (arrayCoches: Coche[]): void {
    for (let coche of arrayCoches) {
      if (coche.getMarcaCoche() === "Renault") {
        console.log(18000);
      }

      if (coche.getMarcaCoche() === "Audi") {
        console.log(25000);
      }
    }
  }
  
  const main = function () {
    const arrayCoches: Coche[] = [
      new Coche("Renault"),
      new Coche("Audi"),
    ]
    imprimirPrecio(arrayCoches)
  }

  console.log("main Principio Abierto Cerrado Error");
  main();
}

// Ejemplo corregido
const mainPac = function () {
  abstract class Coche {
    marca: string
    precio: number
    abstract precioMedioCoche(): number;
  }

  class Renault extends Coche {
    precioMedioCoche():number {
      return 18000
    }
  }

  class Audi extends Coche {
    precioMedioCoche(): number {
      return 25000
    }
  }

  const imprimirPrecio = function (arrayCoches: Coche[]) {
    for (let coche of arrayCoches) {
      console.log(coche.precioMedioCoche())
    }
  }

  const main = function () {
    const arrayCoches: Coche[] = [
      new Renault(),
      new Audi()
    ]
    imprimirPrecio(arrayCoches);
  }
  console.log("main Principio Abierto Cerrado");
  main();
}



// L: Principio de substitucion de Liskov

/* Una subclase debe poder ser sustituible por su subclase. De no ser asi no se
* cumple el principio */
const mainPSLiskovError = function() {
  abstract class Coche {
    marca: string
    precio:number
    abstract precioMedioCoche():number
  }

  class Renault extends Coche {
    precioMedioCoche():number{
      return 18000
    }
  }

  class Audi extends Coche {
    precioMedioCoche():number{
      return 25000
    }
  }

  class Mercedes extends Coche {
    precioMedioCoche():number{
      return 25000
    }
  }

  const numAsientosRenault = function() {
    return 4
  }
  const numAsientosAudi = function() {
    return 2
  }
  const numAsientosMercedes = function() {
    return 4
  }
  const imprimirAsientos = function (arrayCoches: Coche[]) {
    for (let coche of arrayCoches) {
      if (coche instanceof Renault){
        console.log(numAsientosRenault())
      }
      if (coche instanceof Audi){
        console.log(numAsientosRenault())
      }
      if (coche instanceof Mercedes){
        console.log(numAsientosRenault())
      }
    }
  }

  const main = function () {
    const arrayCoches: Coche[] = [
      new Renault(),
      new Audi(),
      new Mercedes()
    ]
    imprimirAsientos(arrayCoches);
  }
  console.log("main Principio de substitucion de Liskov con Error")
  main()
}


const mainPSLiskov = function() {
  abstract class Coche {
    marca: string
    precio:number
    abstract precioMedioCoche():number
    abstract numAsientos():number
  }

  class Renault extends Coche {
    precioMedioCoche():number{
      return 18000
    }
    numAsientos():number{
      return 4
    }
  }

  class Audi extends Coche {
    precioMedioCoche():number{
      return 25000
    }
    numAsientos():number{
      return 2
    }
  }

  class Mercedes extends Coche {
    precioMedioCoche():number{
      return 25000
    }
    numAsientos():number{
      return 4
    }
  }

  class Ford extends Coche {
    precioMedioCoche():number{
      return 25000
    }
    numAsientos():number{
      return 4
    }
  }

  const imprimirAsientos = function (arrayCoches: Coche[]) {
    for (let coche of arrayCoches) {
      console.log(coche.numAsientos())
    }
  }

  const main = function () {
    const arrayCoches: Coche[] = [
      new Renault(),
      new Audi(),
      new Mercedes(),
      new Ford()
    ]
    imprimirAsientos(arrayCoches);
  }
  console.log("main Principio de substitucion de Liskov con Error")
  main()
}

// I: Principio de segregacion de interfaz

/* No se debe depender de interfaces que no se usan, se tiene que crear las propias en caso de no existir */

const mainPSIError = function() {
  interface IAve{
    volar():void
    comer():void
    nadar():void
  }
  class Loro implements IAve{
    volar():void{

    }
    comer():void{

    }
    nadar():void{

    }
  }
  class Tucan implements IAve{
    volar():void{

    }
    comer():void{

    }
    nadar():void{

    }
  }
  class Pinguino implements IAve{
    volar():void{

    }
    comer():void{

    }
    nadar():void{

    }
  }
}

const mainPSI = function(){
  interface IAve{
    comer():void
  }
  interface IAveVoladora{
    volar():void
  }
  interface IAveNadadora{
    nadar():void
  }

  class Loro implements IAve,IAveVoladora{
    comer():void{

    }
    volar():void{

    }
  }

  class Pinguino implements IAve,IAveNadadora{
    comer():void{

    }
    nadar():void{

    }
  }

}

// D: Principio de inversion de dependencias.

/* Cuando se usa una clase, y es necesario tener una dependencia, se debe usar
* la clase abstracta en lugar de la concreta. */

const mainPIDError = function() {

  class Dato {

  }

  class DatabaseService{
    getDatos(): void{

    }
  }

  class AccesoADatos{
    databaseService:DatabaseService

    constructor(databaseService:DatabaseService){
      this.databaseService = databaseService
    }

    getDatos():Dato {
      this.databaseService.getDatos()
      //...
      return new Dato()
    }
  }
}

const mainPID = function() {

  class Dato {

  }

  interface Conexion{
    getDatos():Dato
    setDatos():void
  }

  class DatabaseService implements Conexion{
    getDatos(): Dato {
      return new Dato()
    }
    setDatos():void {

    }
  }

  class APIService implements Conexion{
    getDatos(): Dato {
      return new Dato()
    }
    setDatos():void {

    }
  }

  class AccesoADatos{
    conexion:Conexion

    constructor(conexion:Conexion){
      this.conexion = conexion
    }

    getDatos():Dato {
      this.conexion.getDatos()
      //...
      return new Dato()
    }
  }
}

// main1()
// mainPacError()
// mainPac()
// mainPSLiskovError()
// mainPSLiskov()
// mainPSIError()
// mainPSI()
// mainPIDError()
// mainPID()