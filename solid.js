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
          si no se los paso màs adelante hago un mètodo que permita modificarlo  */
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
muchas implicancias de corregir en el còdigo (Herencia de clases
  para solo poner una propiedad de la clase abstracta) */
/* Cerrado porque se quiere indicar que el
precio es una propiedad de cada uno de los autos */
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
mainPac();
