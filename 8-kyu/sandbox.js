//solution Preferred vy Apostatize
function multiply(a, b){
    // typeof === number returns false for null or empty values
    if (typeof a === "number" && typeof b === "number") {
      return a * b;
    } else {
      return 'Please enter 2 numbers';
    }
  }

//another solution by noname, but second most voted as best practice
function multiply(a, b){
    if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
      return 0;
    }
    return a * b;
  }
  
  console.log(multiply(2, 3));
  console.log(multiply(3, 'a'));