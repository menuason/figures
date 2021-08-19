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

const a = new Point(0, 0);
const b = new Point(0, 0);
const c = new Point(4, 10);
const e = new Point(1, 1);
const d = new Point(5, 6);
const f = new Point(3, 7);

const triangles = [new Triangle(a, b, c), new Triangle(e, d, f)];

const triangleRoot = document.getElementById("triangle-root");

triangleRoot.innerHTML = `
 ${triangles
    .map(
        (triangle, index) => `
          <div class= "app-shell ${!triangle.isValid() ? "invalid" : ""} ">
            <h1>Triangle</h1>
            <div class="list">
                <div class="area">area:${triangle.isValid() ? triangle.area() : "--"}</div>
                <div class="vertices"> vertices:
                    <div class="chip"> ab: ${triangle.isValid() ? triangle.ab.toFixed(2): "--"}</div>
                    <div class="chip"> bc: ${triangle.isValid() ? triangle.bc.toFixed(2): "--"}</div>
                    <div class="chip"> cd: ${triangle.isValid() ? triangle.ca.toFixed(2): "--"}</div>
                </div> 
            </div>
          </div>
        `
    )
   .join("")}
`;
