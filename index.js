// var value1 = document.querySelector(".value1");
// var value2 = document.querySelector(".value2");

// var add = document.querySelector(".add");
// var subtract = document.querySelector(".subtract");
// var divide = document.querySelector(".divide");
// var multiply = document.querySelector(".multiply");

// var resultText = document.querySelector(".result-text");

// function valuesValidate() {
//   if((isNaN(parseInt(value1.value)) || isNaN(parseInt(value2.value))) || (value1.value === "" || value2.value === "")){
//     resultText.textContent = "Please input valid number in both fields";
//     value1.value ="";
//     value2.value ="";
//     return true;
//   }
// }

// function resultFunc(prop) {
//   resultText.textContent = prop;
//   value1.value ="";
//   value2.value ="";
// }

// function addValues(){
//   if (!valuesValidate()) {
//     var result = parseInt(value1.value) + parseInt(value2.value);
//     resultFunc(result);
//   };
  
// }

// function subtractValues(){
//   if (!valuesValidate()) {
//     var result = parseInt(value1.value) - parseInt(value2.value);
//     resultFunc(result);
//   };
// }

// function divideValues(){
//   if (!valuesValidate()) {
//     var result = parseInt(value1.value) / parseInt(value2.value);
//     resultFunc(result);
//   };
// }

// function multiplyValues(){
//   if (!valuesValidate()) {
//     var result = parseInt(value1.value) * parseInt(value2.value);
//     resultFunc(result);
//   };
// }

// add.addEventListener("click", addValues);
// subtract.addEventListener("click", subtractValues);
// divide.addEventListener("click", divideValues);
// multiply.addEventListener("click", multiplyValues);

(() => {
  const btns = document.querySelectorAll('.btns');
  const inputValue = document.querySelector('.calculator_input');
  const outputValue = document.querySelector('.calculator_output');
  const display = document.querySelector('.calculator_display');
  const slideT = document.getElementById('slideT');
  const slideR = document.getElementById('slideR');
  const slideD = document.getElementById('slideD');
  const slideL = document.getElementById('slideL');

  slideT.onclick = function () {
    display.scrollTop -= 20;
  };
  slideR.onclick = function () {
    display.scrollLeft += 20;
  };
  slideD.onclick = function () {
    display.scrollTop += 20;
  };
  slideL.onclick = function () {
    display.scrollLeft -= 20;
  };
  

  // inputValue.addEventListener('change', (e) => {
    
  // })

  btns.forEach((btn) => {
    let operator;
    let compute = "";
    // let insert = "";
    btn.addEventListener('click', (e) => {
      if(e.target.value === '+' || e.target.value === '-' || e.target.value === '*' || e.target.value === "/") {
        operator = ` ${e.target.value} `;
        compute = operator;
        // insert += compute;
        inputValue.innerHTML += compute;
        // display.scrollLeft = - (display.scrollLeft); .........COMPLETE LATER
        return;
      }

      console.log(/^([A-Za-z])$/.test(e.target.value))

      if(e.target.value !== '=' &&  !(/^([A-Za-z])$/.test(e.target.value))) {
        compute = e.target.value;
        // display.scrollLeft += 20; ..........COMPLETE LATER
        // inputValue.innerHTML = compute;
      }

      if(compute) {
        inputValue.innerHTML += compute;
      } 
      // console.log(eval(inputValue.value), 'compute')?

      if(e.target.value === '=') {
        console.log(inputValue.innerHTML, 'inputvalue')
        // var answer = eval(inputValue.innerHTML);
        // var answer = Number.parseFloat(eval(inputValue.innerHTML)).toPrecision(10);
        var answer = +((eval(inputValue.innerHTML)).toFixed(10));
        // outputValue.innerHTML = +(parseInt(answer)).toFixed(10);
        outputValue.innerHTML = answer;
        outputValue.scrollIntoView();
      }

      if(e.target.value === 'C') {
        answer = "";
        outputValue.innerHTML = answer;
        inputValue.innerHTML = "";
      }

      if(e.target.value === 'D') {
        var str = inputValue.innerHTML;
        var newStr = str.substr(0, str.length -1);
        inputValue.innerHTML = newStr;
        outputValue.innerHTML = "";
        // console.log(inputValue.innerHTML);
      }
    })

  })
  // function calculate(val) {
  //   console.log(val, 'val')
  // }
})()