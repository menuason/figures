// import { Point } from "./point";
//
// export
class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }
  area() {
    return (Math.PI * this.radius) ** 2;
  }
}

const center = new Point(3, 4);
const radius = 10;
const circle = new Circle(center, radius);

const circleRoot = document.getElementById("circle-root");

circleRoot.innerHTML = `
<div class="app-shell">
  <h1> Circle </h1>
    <div class="list">
      <div class="area">area: ${circle.area().toFixed(2)}
        <div class="vertices"> center:
          <div class="chip"> x= ${center.x}</div>
          <div class="chip"> y= ${center.y}</div>
        </div>
      </div>
    </div>
</div> 
`;