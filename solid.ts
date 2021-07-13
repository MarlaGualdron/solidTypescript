/* S: Principio de Resp unica
El nombre que le pongo a la clase es lo que define la resposabilidad
 */

const main1 = function () {
  class Coche{
    marca: string;
    patente: number;
  /*   al constructor generalmente le paso los atributos
    si no se los paso màs adelante hago un mètodo que permita modificarlo  */
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
muchas implicancias de corregir en el còdigo (Herencia de clases
  para solo poner una propiedad de la clase abstracta) */
/* Cerrado porque se quiere indicar que el 
precio es una propiedad de cada uno de los autos */

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

  console.log("main Principio Abierto Cerrado Error")
  main()
}

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
  console.log("main Principio Abierto Cerrado")
  main()
}


mainPac()