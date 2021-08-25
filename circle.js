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
const circles = [new Circle(center, radius)];

const circleRoot = document.getElementById("circle-root");
const renderCircle = (circle) => `
<div class="list">
  <div class="area">area: ${circle.area().toFixed(2)}
    <div class="shape-info"> center:
      <div class="chip">O (x: ${center.x} y: ${center.y})</div>
    </div>
  </div>
</div>
`

circleRoot.innerHTML = `
<div class="app-shell">
  <h1> Circle </h1>
  ${circles.map(renderCircle).join('')}
</div> 
`;