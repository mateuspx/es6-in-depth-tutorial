var z = 10 * 4 / 2;
var a = "good" + "day";
var r = 9 % 3;
console.log(z);
console.log(a);
console.log(r);

function print(a, b, c) {
  console.log(a + b + c);
}
print("one ","two ", "three");

var multiply = function(a, b) {
  return a*b;
}

var product = multiply(5, 10);
console.log(product);

// OBJECT

var dog = {
  name: "buddy",
  breed: "golden retriever",
  weight: 60,
  bark: function() {
    ;
  }
};

console.log(dog);
console.log(dog.breed);
console.log(dog["breed"]);
dog.bark();

// ARRAYS

var points = [25, 16, 7, 9, 31];
points.push(8);
var last = points.pop();
var first = points[0];
console.log(points, last,first);
console.log(points.length);

var truth = true;
console.log(typeof truth);

// BOOLEANS AND COMPARISON OPERATORS

var d = 5 <= 7;
var e = 5 == 5;
var f = 5 > 7;
console.log(d, e, f);

// IF STATEMENTS

var x = 10;

if (8 > x) {
  console.log("8 is greater");
} else if (15 > x) {
  console.log("15 is greater");
} else {
  console.log("8 isn't greater");
}
