// export
class Point {
  constructor(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("blabla");
    }
    this.x = x;
    this.y = y;
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

const points = [new Point(5, 6), new Point(10, 12), new Point(15, 20)];

const appRoot = document.getElementById("app-root");

appRoot.innerHTML = `
<div class="app-shell">

  <h1>Points</h1>
  <div class="list">
    ${points
    .map(
        (point) => `
          <div class="chip">
            <span>x: ${point.x}</span>
            <span>y: ${point.y}</span>
          </div>
        `
    )
    .join("")}
  </div>
</div>
`;
compareWithPrecision = function(firstNum, secondNum) {
  // const num = +firstNum;
  // const secondNumber = +secondNum;
  // console.log(second);

  return +firstNum.toFixed(7) === +secondNum.toFixed(7);
}