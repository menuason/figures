class Rectangle {
  constructor(a, b, c, d, name) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.name = name;
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



const firstRectanglePointOne = new Point(2, 2, 'A');
const firstRectanglePointTwo = new Point(2, 6, 'B');
const firstRectanglePointThree = new Point(6, 10, 'C');
const firstRectanglePointFour = new Point(1, 1, 'D');

const secondRectanglePointOne = new Point(1, 1,'E');
const secondRectanglePointTwo = new Point(1, 2, 'F');
const secondRectanglePointThree = new Point(3, 2, 'G');
const secondRectanglePointFour = new Point(3, 1, 'H');


const rectangles = [new Rectangle(
  firstRectanglePointOne,
  firstRectanglePointTwo,
  firstRectanglePointThree,
  firstRectanglePointFour,

), new Rectangle(
  secondRectanglePointOne,
  secondRectanglePointTwo,
  secondRectanglePointThree,
  secondRectanglePointFour,
)];

// const rectangleRoot = document.getElementById("rectangle-root");

const renderRectangle = (rectangle) => `
<div class="main-card ${!rectangle.isValid() ? "invalid" : ""} ">
  <h1 class ='title-container'>
    ${rectangle.a.name}${rectangle.b.name}${rectangle.c.name}${rectangle.d.name}
  </h1>
  <div class="area">area: ${
      rectangle.isValid() ? rectangle.area() : "--"
  }</div>
  <div class = "shape-info">sides:

    <div class="chip">${rectangle.a.name}${rectangle.b.name} = ${
      rectangle.isValid() ? rectangle.ab.toFixed(2) : "--"
    }</div>
      
    <div class="chip">${rectangle.b.name}${rectangle.c.name} = ${
      rectangle.isValid() ? rectangle.bc.toFixed(2) : "--"
    }</div>
      
    <div class="chip">${rectangle.c.name}${rectangle.d.name} = ${
      rectangle.isValid() ? rectangle.cd.toFixed(2) : "--"
    }</div>
      
    <div class="chip">${rectangle.d.name}${rectangle.a.name} = ${
      rectangle.isValid() ? rectangle.da.toFixed(2) : "--"
    }</div>  
    </div>
    <div class="shape-info">
      Vertices:
      ${renderPoint(rectangle.a)}
      ${renderPoint(rectangle.b)}
      ${renderPoint(rectangle.c)}
      ${renderPoint(rectangle.d)}
  </div>
</div>
`

// rectangleRoot.innerHTML = `
// <div class="app-shell">
//     ${rectangles.map(renderRectangle).join('')}
//   </div>
// `;

const renderRectangleList = (rectangles) => `
  <div class="app-shell">
      ${rectangles.map(renderRectangle).join('')}
    </div>
`;