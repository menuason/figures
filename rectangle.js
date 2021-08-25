class Rectangle {
  constructor(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }

  get ab() {
    return this.a.distanceFrom(this.b);
  }
  get bc() {
    return this.b.distanceFrom(this.c);
  }
  get cd() {
    return this.c.distanceFrom(this.d);
  }
  get da() {
    return this.d.distanceFrom(this.a);
  }

  area() {
    return (
      Math.max(this.ab, this.bc, this.cd, this.da) *
      Math.min(this.ab, this.bc, this.cd, this.da)
    );
  }

  isValid() {
    const firstTriangle = new Triangle(this.a, this.b, this.c);
    const secondTriangle = new Triangle(this.b, this.c, this.d);
    return compareWithPrecision(firstTriangle.area() + secondTriangle.area(), this.area());
  }
}



const firstRectanglePointOne = new Point(2, 2);
const firstRectanglePointTwo = new Point(2, 6);
const firstRectanglePointThree = new Point(6, 10);
const firstRectanglePointFour = new Point(1, 1);

const secondRectanglePointOne = new Point(1, 1);
const secondRectanglePointTwo = new Point(1, 2);
const secondRectanglePointThree = new Point(3, 2);
const secondRectanglePointFour = new Point(3, 1);


const rectangles = [new Rectangle(
  firstRectanglePointOne,
  firstRectanglePointTwo,
  firstRectanglePointThree,
  firstRectanglePointFour
), new Rectangle(
  secondRectanglePointOne,
  secondRectanglePointTwo,
  secondRectanglePointThree,
  secondRectanglePointFour
  )];
const rectangleRoot = document.getElementById("rectangle-root");

const renderRectangle = (rectangle) => `
<div class="main-card ${!rectangle.isValid() ? "invalid" : ""} ">
  <h1 class ='name-container'>Reactangles</h1>
  <div class="area">area: ${
      rectangle.isValid() ? rectangle.area() : "--"
  }</div>
  <div class = "shape-info">sides:

    <div class="chip">side one: ${
      rectangle.isValid() ? rectangle.ab.toFixed(2) : "--"
    }</div>
      
    <div class="chip">side two: ${
      rectangle.isValid() ? rectangle.bc.toFixed(2) : "--"
    }</div>
      
    <div class="chip">side three: ${
      rectangle.isValid() ? rectangle.cd.toFixed(2) : "--"
    }</div>
      
    <div class="chip">side four: ${
      rectangle.isValid() ? rectangle.da.toFixed(2) : "--"
    }</div>  
    </div>
    <div class="shape-info"> Picks:
      <div class="chip">A (x: ${rectangle.a.x} y: ${rectangle.a.y})</div>
      <div class="chip">B (x: ${rectangle.b.x} y: ${rectangle.b.y})</div>
      <div class="chip">C (x: ${rectangle.c.x} y: ${rectangle.c.y})</div>
      <div class="chip">D (x: ${rectangle.d.x} y: ${rectangle.d.y})</div>
  </div>
</div>
`

rectangleRoot.innerHTML = `
<div class="app-shell">
    ${rectangles.map(renderRectangle).join('')}
  </div>
`;
