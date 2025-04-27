async function main() {
  //Abstract parent class
  class Shape {
    constructor(colour) {
      this.colour = colour;
      if (new.target === Shape) {
        throw new Error("Cannot instantiate abstract class 'Shape'!");
      }
    }

    get perimeter() {
      throw new Error("Perimeter must be implemented in child classes!");
    }

    get area() {
      throw new Error("Area must be implemented in child classes!");
    }

    contain() {
      throw new Error("Abstract method 'contain' must be implemented!");
    }
  }

  //Rectangle child class
  class Rectangle extends Shape {
    constructor(colour, length, width) {
      super(colour);
      this.length = length;
      this.width = width;
    }

    get isSquare() {
      return this.length == this.width;
    }

    get perimeter() {
      return 2 * (this.length + this.width);
    }

    get area() {
      return this.length * this.width;
    }

    contain() {
      if (this.length >= this.width) {
        return this.length ** 2;
      }
      else {
        return this.width ** 2;
      }
    }
  }

  //Triangle child class
  class Triangle extends Shape {
    constructor(colour, base, height) {
      super(colour);
      this.base = base;
      this.height = height;
    }

    get perimeter() {
      return this.base + 2 * (Math.sqrt ((this.base / 2) ** 2 + this.height ** 2));
    }

    get area() {
      return this.base * this.height / 2;
    }

    contain() {
      if (this.base >= this.height) {
        return this.base ** 2;
      }
      else {
        return this.height ** 2;
      }
    }
  }

  //Circle child class
  class Circle extends Shape {
    constructor(colour, radius) {
      super(colour);
      this.radius = radius; 
    }

    get diameter() {
      return this.radius * 2;
    }

    get circumference() {
      return Math.PI * this.radius * 2; 
    }

    get perimeter() {
      return this.circumference;
    }

    get area() {
      return Math.PI * this.radius ** 2;
    }

    contain() {
      return this.diameter ** 2;
    }
  }

  /*let rectangle = new Rectangle("blue", 2, 4);
  let triangle = new Triangle("red", 3, 6);
  let circle = new Circle("yellow", 5);
  output(rectangle);
  output(rectangle.perimeter);
  output(rectangle.area);
  output(rectangle.contain());
  output(triangle);
  output(triangle.perimeter);
  output(triangle.area);
  output(triangle.contain());
  output(circle);
  output(circle.perimeter);
  output(circle.area);
  output(circle.contain());*/

  /*let test = new Shape();
  output(test);
  output(test.perimeter);
  output(test.area);
  output(test.contain());*/
}
