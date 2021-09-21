// var points = [
//   { x: 0, y: 0 },
//   { x: 1, y: 1 },
// ];

// points.dist = function () {
//   var p1 = this[0];

//   var p2 = this[1];

//   console.log("p1", p1);
//   console.log("p2", p2);
// };

// points.dist();

function Point(x, y) {
  this.x = x;
  this.y = y;
}

var p = new Point(1, 1);

Point.prototype.r = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};

console.log(p.r());

console.log(p);
