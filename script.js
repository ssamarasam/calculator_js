let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");

//
let reset = document.querySelector("#clear");
let keyPress = document.querySelectorAll(".num");
let evaluate = document.querySelector(".eql-btn");
let output = document.querySelector(".result");

let expression = "";
let operatorValue = "";
let finalExpression = "";
let operatorPressCount = 0;

resetScreen = () => {
  expression = "";
  operatorValue = "";
  finalExpression = "";
  operatorPressCount = 0;
};

for (let i = 0; i < keyPress.length; i++) {
  keyPress[i].addEventListener("click", function () {
    console.log(keyPress[i].value);
    expression += keyPress[i].value;
    output.value = expression;
    operatorPressCount = 0;
  });
}

let oPress = document.querySelectorAll(".operator");

for (let i = 0; i < oPress.length; i++) {
  oPress[i].addEventListener("click", function () {
    operatorPressCount += 1;

    operatorValue = oPress[i].value;

    if (operatorPressCount <= 1) {
      expression += operatorValue;
      output.value = expression;
    }
  });
}

evaluate.addEventListener("click", function () {
  let lastElement = expression[expression.length - 1];
  let newExpression = "";

  if (
    lastElement === "+" ||
    lastElement === "-" ||
    lastElement === "*" ||
    lastElement === "/"
  ) {
    newExpression = expression.substring(0, expression.length - 1);
  } else {
    newExpression = expression;
  }
  console.log("new expression:::", newExpression);
  console.log(eval(newExpression));
  output.textContent = eval(newExpression);
  output.value = eval(newExpression);
  resetScreen();
});

reset.addEventListener("click", function () {
  resetScreen();
  output.textContent = "";
});
