function add(a, b) {
  let result = a + b;
  console.log(result);
}

add(1, 9);

let sub = function (a, b) {
  let result = a - b;
  console.log(result);
};

sub(10, 3);

let student = function (name) {
  return name;
};

let studentName = student("suleiman");
console.log(studentName);
