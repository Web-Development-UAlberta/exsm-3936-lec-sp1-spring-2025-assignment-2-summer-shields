async function main() {
  //Abstract parent class
  class Shape {
    constructor(colour, area, perimeter) {
      this.colour = colour;
      this.area = area;
      this.perimeter = perimeter;
      if (new.target === Shape) {
        throw new Error("Cannot instantiate abstract class 'Shape'!");
      }
    }
    
    contain() {
      throw new Error("Abstract method 'contain' must be implemented!");
    }
  }

  class Rectangle extends Shape {
    get isSquare() {
      return 
    }
    constructor(length, width, area, perimeter) {
      super(area, perimeter);
    }
  }

  class Triangle extends Shape {
    constructor(base, height, area, perimeter) {
      super(area, perimeter);
    }
  }

  class Circle extends Shape {
    get circumference() {
      return 
    }
    constructor(radius, area, perimeter) {
      super(area, perimeter);
    }

    get perimeter() {
      return this.circumference;
    }
  }
}
