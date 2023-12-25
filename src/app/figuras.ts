
abstract class FiguraGeometrica {
    protected nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    abstract calcularPerimetro(): number;
  }
  
  class Circulo extends FiguraGeometrica {
    private radio: number;
  
    constructor(nombre: string, radio: number) {
      super(nombre);
      this.radio = radio;
    }
  
    calcularPerimetro(): number {
      const perimetro = 2 * Math.PI * this.radio;
      console.log(`Perímetro del círculo (${this.nombre}): ${perimetro}`);
      return perimetro;
    }
  }
  
  
  class TrianguloEscaleno extends FiguraGeometrica {
    private ladoA: number;
    private ladoB: number;
    private ladoC: number;
  
    constructor(nombre: string, ladoA: number, ladoB: number, ladoC: number) {
      super(nombre);
      this.ladoA = ladoA;
      this.ladoB = ladoB;
      this.ladoC = ladoC;
    }
  
    calcularPerimetro(): number {
      const perimetro = this.ladoA + this.ladoB + this.ladoC;
      console.log(`Perímetro del triángulo escaleno (${this.nombre}): ${perimetro}`);
      return perimetro;
    }
  }
  
  class TrianguloEquilatero extends TrianguloEscaleno {
    constructor(nombre: string, ladoA: number) {
      super(nombre, ladoA, ladoA, ladoA);
    }
  }
  
  // PRUEBAS DE FUNCIONAMIENTO
  
  const circulo = new Circulo("Circulo1", 15);
  circulo.calcularPerimetro();
  
  const trianguloEscaleno = new TrianguloEscaleno("TrianguloEscaleno1", 10, 20, 15);
  trianguloEscaleno.calcularPerimetro();
  
  const trianguloEquilatero = new TrianguloEquilatero("TrianguloEquilatero1", 5);
  trianguloEquilatero.calcularPerimetro();
  