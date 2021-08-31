// export
class Point {
  constructor(x, y, name) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("point shud be a number");
    }
    this.x = x;
    this.y = y;
    this.name = name;
  }
  
  distanceFrom(point) {
    if (!(point instanceof Point)) {
      throw new Error("blabla");
    }
    return Math.sqrt((this.x - point.x) ** 2 + (this.y - point.y) ** 2);
  }
  distanceFromOrigin() {
    return this.distanceFrom(Point.origin);
  }
  // static origin = new Point(0,0);
}

const points = [new Point(5, 6, 'A'), new Point(10, 12, 'B'), new Point(15, 20,'C')];

// const appRoot = document.getElementById("app-root");
const renderPoint = (point, index) => `

<div class="chip">
  ${point.name}
  (x: ${point.x}
  y: ${point.y})
</div>
`;

const renderPointList = (points) =>`
    <div class="list">
      <div class="flex-container">
        ${
          points.map(renderPoint).join('')
        }
      </div>
    </div>

`;

// appRoot.innerHTML = `
// <div class="app-shell">

//   <h1 class='name-container'>Points</h1>
//   <div class="list">
//     <div class="flex-container">
//       ${points.map(renderPoint).join("")}
//     </div>
//   </div>
// </div>
// `;
compareWithPrecision = function(firstNum, secondNum) {
  // const num = +firstNum;
  // const secondNumber = +secondNum;
  // console.log(second);

  return +firstNum.toFixed(7) === +secondNum.toFixed(7);
}

