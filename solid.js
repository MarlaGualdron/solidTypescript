/* S: Principio de Resp unica
El nombre que le pongo a la clase es lo que define la resposabilidad
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var main1 = function () {
    var Coche = /** @class */ (function () {
        /*   al constructor generalmente le paso los atributos
          si no se los paso mÃ s adelante hago un mÃĻtodo que permita modificarlo  */
        function Coche(marca) {
            this.marca = marca;
        }
        Coche.prototype.getMarcaCoche = function () {
            return this.marca;
        };
        Coche.prototype.setPatente = function (patente) {
            this.patente = patente;
        };
        return Coche;
    }());
    console.log("main Principio Respuesta Unica");
};
// O: Principio abierto/cerrado
/* Sea mas facil de extender sin necesidad de generar
muchas implicancias de corregir en el cÃēdigo (Herencia de clases
  para solo poner una propiedad de la clase abstracta) */
/* Cerrado porque se quiere indicar que el
precio es una propiedad de cada uno de los autos */
// Ejemplo con error
var mainPacError = function () {
    var Coche = /** @class */ (function () {
        function Coche(marca) {
            this.marca = marca;
        }
        Coche.prototype.getMarcaCoche = function () {
            return this.marca;
        };
        return Coche;
    }());
    var imprimirPrecio = function (arrayCoches) {
        for (var _i = 0, arrayCoches_1 = arrayCoches; _i < arrayCoches_1.length; _i++) {
            var coche = arrayCoches_1[_i];
            if (coche.getMarcaCoche() === "Renault") {
                console.log(18000);
            }
            if (coche.getMarcaCoche() === "Audi") {
                console.log(25000);
            }
        }
    };
    var main = function () {
        var arrayCoches = [
            new Coche("Renault"),
            new Coche("Audi"),
        ];
        imprimirPrecio(arrayCoches);
    };
    console.log("main Principio Abierto Cerrado Error");
    main();
};
// Ejemplo corregido
var mainPac = function () {
    var Coche = /** @class */ (function () {
        function Coche() {
        }
        return Coche;
    }());
    var Renault = /** @class */ (function (_super) {
        __extends(Renault, _super);
        function Renault() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Renault.prototype.precioMedioCoche = function () {
            return 18000;
        };
        return Renault;
    }(Coche));
    var Audi = /** @class */ (function (_super) {
        __extends(Audi, _super);
        function Audi() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Audi.prototype.precioMedioCoche = function () {
            return 25000;
        };
        return Audi;
    }(Coche));
    var imprimirPrecio = function (arrayCoches) {
        for (var _i = 0, arrayCoches_2 = arrayCoches; _i < arrayCoches_2.length; _i++) {
            var coche = arrayCoches_2[_i];
            console.log(coche.precioMedioCoche());
        }
    };
    var main = function () {
        var arrayCoches = [
            new Renault(),
            new Audi()
        ];
        imprimirPrecio(arrayCoches);
    };
    console.log("main Principio Abierto Cerrado");
    main();
};
// L: Principio de substitucion de Liskov
/* Una subclase debe poder ser sustituible por su subclase. De no ser asi no se
* cumple el principio */
var mainPSLiskovError = function () {
    var Coche = /** @class */ (function () {
        function Coche() {
        }
        return Coche;
    }());
    var Renault = /** @class */ (function (_super) {
        __extends(Renault, _super);
        function Renault() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Renault.prototype.precioMedioCoche = function () {
            return 18000;
        };
        return Renault;
    }(Coche));
    var Audi = /** @class */ (function (_super) {
        __extends(Audi, _super);
        function Audi() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Audi.prototype.precioMedioCoche = function () {
            return 25000;
        };
        return Audi;
    }(Coche));
    var Mercedes = /** @class */ (function (_super) {
        __extends(Mercedes, _super);
        function Mercedes() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Mercedes.prototype.precioMedioCoche = function () {
            return 25000;
        };
        return Mercedes;
    }(Coche));
    var numAsientosRenault = function () {
        return 4;
    };
    var numAsientosAudi = function () {
        return 2;
    };
    var numAsientosMercedes = function () {
        return 4;
    };
    var imprimirAsientos = function (arrayCoches) {
        for (var _i = 0, arrayCoches_3 = arrayCoches; _i < arrayCoches_3.length; _i++) {
            var coche = arrayCoches_3[_i];
            if (coche instanceof Renault) {
                console.log(numAsientosRenault());
            }
            if (coche instanceof Audi) {
                console.log(numAsientosRenault());
            }
            if (coche instanceof Mercedes) {
                console.log(numAsientosRenault());
            }
        }
    };
    var main = function () {
        var arrayCoches = [
            new Renault(),
            new Audi(),
            new Mercedes()
        ];
        imprimirAsientos(arrayCoches);
    };
    console.log("main Principio de substitucion de Liskov con Error");
    main();
};
var mainPSLiskov = function () {
    var Coche = /** @class */ (function () {
        function Coche() {
        }
        return Coche;
    }());
    var Renault = /** @class */ (function (_super) {
        __extends(Renault, _super);
        function Renault() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Renault.prototype.precioMedioCoche = function () {
            return 18000;
        };
        Renault.prototype.numAsientos = function () {
            return 4;
        };
        return Renault;
    }(Coche));
    var Audi = /** @class */ (function (_super) {
        __extends(Audi, _super);
        function Audi() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Audi.prototype.precioMedioCoche = function () {
            return 25000;
        };
        Audi.prototype.numAsientos = function () {
            return 2;
        };
        return Audi;
    }(Coche));
    var Mercedes = /** @class */ (function (_super) {
        __extends(Mercedes, _super);
        function Mercedes() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Mercedes.prototype.precioMedioCoche = function () {
            return 25000;
        };
        Mercedes.prototype.numAsientos = function () {
            return 4;
        };
        return Mercedes;
    }(Coche));
    var Ford = /** @class */ (function (_super) {
        __extends(Ford, _super);
        function Ford() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Ford.prototype.precioMedioCoche = function () {
            return 25000;
        };
        Ford.prototype.numAsientos = function () {
            return 4;
        };
        return Ford;
    }(Coche));
    var imprimirAsientos = function (arrayCoches) {
        for (var _i = 0, arrayCoches_4 = arrayCoches; _i < arrayCoches_4.length; _i++) {
            var coche = arrayCoches_4[_i];
            console.log(coche.numAsientos());
        }
    };
    var main = function () {
        var arrayCoches = [
            new Renault(),
            new Audi(),
            new Mercedes(),
            new Ford()
        ];
        imprimirAsientos(arrayCoches);
    };
    console.log("main Principio de substitucion de Liskov con Error");
    main();
};
// I: Principio de segregacion de interfaz
/* No se debe depender de interfaces que no se usan, se tiene que crear las propias en caso de no existir */
var mainPSIError = function () {
    var Loro = /** @class */ (function () {
        function Loro() {
        }
        Loro.prototype.volar = function () {
        };
        Loro.prototype.comer = function () {
        };
        Loro.prototype.nadar = function () {
        };
        return Loro;
    }());
    var Tucan = /** @class */ (function () {
        function Tucan() {
        }
        Tucan.prototype.volar = function () {
        };
        Tucan.prototype.comer = function () {
        };
        Tucan.prototype.nadar = function () {
        };
        return Tucan;
    }());
    var Pinguino = /** @class */ (function () {
        function Pinguino() {
        }
        Pinguino.prototype.volar = function () {
        };
        Pinguino.prototype.comer = function () {
        };
        Pinguino.prototype.nadar = function () {
        };
        return Pinguino;
    }());
};
var mainPSI = function () {
    var Loro = /** @class */ (function () {
        function Loro() {
        }
        Loro.prototype.comer = function () {
        };
        Loro.prototype.volar = function () {
        };
        return Loro;
    }());
    var Pinguino = /** @class */ (function () {
        function Pinguino() {
        }
        Pinguino.prototype.comer = function () {
        };
        Pinguino.prototype.nadar = function () {
        };
        return Pinguino;
    }());
};
// D: Principio de inversion de dependencias.
/* Cuando se usa una clase, y es necesario tener una dependencia, se debe usar
* la clase abstracta en lugar de la concreta. */
var mainPIDError = function () {
    var Dato = /** @class */ (function () {
        function Dato() {
        }
        return Dato;
    }());
    var DatabaseService = /** @class */ (function () {
        function DatabaseService() {
        }
        DatabaseService.prototype.getDatos = function () {
        };
        return DatabaseService;
    }());
    var AccesoADatos = /** @class */ (function () {
        function AccesoADatos(databaseService) {
            this.databaseService = databaseService;
        }
        AccesoADatos.prototype.getDatos = function () {
            this.databaseService.getDatos();
            //...
            return new Dato();
        };
        return AccesoADatos;
    }());
};
var mainPID = function () {
    var Dato = /** @class */ (function () {
        function Dato() {
        }
        return Dato;
    }());
    var DatabaseService = /** @class */ (function () {
        function DatabaseService() {
        }
        DatabaseService.prototype.getDatos = function () {
            return new Dato();
        };
        DatabaseService.prototype.setDatos = function () {
        };
        return DatabaseService;
    }());
    var APIService = /** @class */ (function () {
        function APIService() {
        }
        APIService.prototype.getDatos = function () {
            return new Dato();
        };
        APIService.prototype.setDatos = function () {
        };
        return APIService;
    }());
    var AccesoADatos = /** @class */ (function () {
        function AccesoADatos(conexion) {
            this.conexion = conexion;
        }
        AccesoADatos.prototype.getDatos = function () {
            this.conexion.getDatos();
            //...
            return new Dato();
        };
        return AccesoADatos;
    }());
};
// main1()
// mainPacError()
// mainPac()
// mainPSLiskovError()
// mainPSLiskov()
// mainPSIError()
// mainPSI()
// mainPIDError()
// mainPID()
