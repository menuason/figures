// import { Point } from "./point";
//
// export
class Triangle {
  constructor(a, b, c, name) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.name = name;
  }
  get ab() {
    return this.a.distanceFrom(this.b);
  }
  get bc() {
    return this.b.distanceFrom(this.c);
  }
  get ca() {
    return this.c.distanceFrom(this.a);
  }
  get perimetr() {
    return (this.ab + this.bc + this.ca) / 2;
  }
  isValid() {
    const max = Math.max(this.ab, this.bc, this.ca);
    return max < this.ab + this.bc + this.ca - max;
  }
  area() {
    return Math.sqrt(
      this.perimetr *
        (this.perimetr - this.ab) *
        (this.perimetr - this.bc) *
        (this.perimetr - this.ca)
    );
  }
}

const d = new Point(0, 0, 'D');
const e = new Point(0, 0, 'E');
const f = new Point(4, 10, 'F');
const g = new Point(1, 1, 'G');
const h = new Point(5, 6, 'H');
const k = new Point(3, 7, 'K');

const triangles = [new Triangle(d, e, f, 'ABC'), new Triangle(g, h, k, 'GHK')];

// const triangleRoot = document.getElementById("triangle-root");

const renderTriangle = (triangle) => `
  <div class= "main-card ${!triangle.isValid() ? "invalid" : ""} ">
    <h1 class='title-container'>${triangle.name}</h1>
        <div class="area">area:${triangle.isValid() ? triangle.area() : "--"}</div>
        <div class="shape-info"> sides:
          <div class="chip"> first side: ${triangle.isValid() ? triangle.ab.toFixed(2): "--"}</div>
          <div class="chip"> second side: ${triangle.isValid() ? triangle.bc.toFixed(2): "--"}</div>
          <div class="chip"> third side: ${triangle.isValid() ? triangle.ca.toFixed(2): "--"}</div>
      </div> 
    <div class="shape-info"> Picks:
      <div class="chip">A (x: ${triangle.a.x} y: ${triangle.a.y})</div>
      <div class="chip">B (x: ${triangle.b.x} y: ${triangle.b.y})</div>
      <div class="chip">C (x: ${triangle.c.x} y: ${triangle.c.y})</div>
    </div>
  </div>
`

// triangleRoot.innerHTML = `
// <div class="app-shell">
//   <h1 class='name-container'>Triangles</h1>
//   ${triangles.map(renderTriangle).join("")}
// </div>
// `;

const renderTriangleList = (triangles) => `
  <div class="app-shell">
    ${triangles.map(renderTriangle).join("")}
  </div>
`;

