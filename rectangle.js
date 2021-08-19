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



const h = new Point(2, 2);
const g = new Point(2, 6);
const j = new Point(6, 10);
const q = new Point(1, 1);

const pointOne = new Point(1, 1);
const pointTwo = new Point(1, 2);
const pointThree = new Point(3, 2);
const pointFour = new Point(3, 1);


const rectangles = [new Rectangle(h, g, j, q), new Rectangle(pointOne, pointTwo, pointThree, pointFour)];
const rectangleRoot = document.getElementById("rectangle-root");

rectangleRoot.innerHTML = `
 ${rectangles
    .map(
        (rectangle, index) => `
    
            <div class="app-shell ${!rectangle.isValid() ? "invalid" : ""} ">
                <h1>Reactangle</h1>
                <div class="list">
                    <div class="area">area: ${
                      rectangle.isValid() ? rectangle.area() : "-"
                    }</div>
                    <div class = "vertices">vertices:
              
                      <div class="chip">ab: ${
                        rectangle.isValid() ? rectangle.ab.toFixed(2) : "--"
                      }</div>
                      
                      <div class="chip">bc: ${
                        rectangle.isValid() ? rectangle.bc.toFixed(2) : "--"
                      }</div>
                      
                      <div class="chip">cd: ${
                        rectangle.isValid() ? rectangle.cd.toFixed(2) : "--"
                      }</div>
                      
                      <div class="chip">da: ${
                        rectangle.isValid() ? rectangle.da.toFixed(2) : "--"
                      }</div>
                    </div>
                </div>
          </div>
        `
    )
    .join("")}
`;
