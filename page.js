//Task 1
let factory = {
    calculateWorkload: function() {
        let workload = [40,25,28,30,31];
        return workload;
    },
    formatArray: function(name) {
        let timeSpent = 1;
        let timeLeft = 5 - timeSpent;
        let obj = {name: name, timeLeft: timeLeft};
        return obj;
    }
 };
 
 console.log(factory.calculateWorkload.bind(factory)());
 console.log(factory.formatArray.bind(factory)('John'));
 
 //Task 2

 function sumOfNumbers() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  let numbers = [1, 2, 3, 4, 5];
  let result = sumOfNumbers.apply(null, numbers);
  console.log(result); 
  
  //Task 3

  function checkIfEven(n) {
    if (n === 0) {
      return "even";
    } else if (n === 1) {
      return "odd";
    } else {
      return checkIfEven(n - 2);
    }
  }
  console.log(checkIfEven(4)) 
  
  //Task 4

function ordinalChoices(colors, ordinals) {
    var result = [];
    for (var i = 0; i < colors.length; i++) {
      var choiceNum = i + 1;
      var ordinal = "";
      if (choiceNum > 3) {
        ordinal = "th";
      } else {
        ordinal = ordinals[choiceNum - 1];
      }
      result.push("Choice " + choiceNum + ordinal + " is " + colors[i] + ".");
    }
    return result;
  }
  
  console.log(ordinalChoices(["blue", "green", "red", "orange", "purple", "indigo", "yellow"], ["st", "nd", "rd"]));

// Task 5

function removeFalseValues(arr) {
    return arr.filter(val => 
      val !== null && 
      val !== 0 && 
      val !== "" && 
      val !== false && 
      val !== undefined && 
      !Number.isNaN(val)
    );
  }
  
  let arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];
  console.log(removeFalseValues(arr)); 

//Task 6
 
function mergeArr(arr1, arr2) {
    return arr1.concat(arr2).filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    });
}

let arr1 = [1, 2, 3];
let arr2 = [2, 1, 30];
console.log(mergeArr(arr1, arr2)); 

//Task 7

function sumArrays(arr4, arr5) {
    let newArr = [];
    for (let i = 0; i < Math.max(arr4.length, arr5.length); i++) {
        newArr.push((arr4[i] || 0) + (arr5[i] || 0));
    }
    return newArr;
}

let arr4 = [1, 10, 12, 13];
let arr5 = [4, 5];
console.log(sumArrays(arr4, arr5));