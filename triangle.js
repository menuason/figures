// import { Point } from "./point";
//
// export
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
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

const d = new Point(0, 0);
const e = new Point(0, 0);
const f = new Point(4, 10);
const g = new Point(1, 1);
const h = new Point(5, 6);
const k = new Point(3, 7);

const triangles = [new Triangle(d, e, f), new Triangle(g, h, k)];

const triangleRoot = document.getElementById("triangle-root");

triangleRoot.innerHTML = `
  ${triangles
    .map(
      (triangle) => `
        <div class= "app-shell ${!triangle.isValid() ? "invalid" : ""} ">
          <h1 class='name-container'>Triangles</h1>
          <div class="list">
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
        </div>
      `
    )
  .join("")}
`;
