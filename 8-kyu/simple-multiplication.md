# [Multiply](https://www.codewars.com/kata/50654ddff44f800200000004)

Multiplication is a simple math calculation. It is vastly used in different applications, such as an e-commerce website, accounting app etc.

To use this function, obviously we need numbers as parameters. 

## Syntax

> multiply(`number`, `number`) -> `number`

### Parameters

**a**: `number`

- any number inserted by user, can be positive, negative, decimal.  

**b**: `number`

- any number inserted by user, can be positive, negative, decimal.

### Return Value: `number`

- Any numbers which is the result from a being multiply by b.
- String will be a sentence to indicate the users that they have put something which is not a number.

## Examples

This function behave in two ways, depending on the user inputs. It will give a correct result in number for the multiplication, if the inputs are right in numbers.

On the other hand, it will send an indication to users or an ERROR if the input is not a number, thus the supposed result in number for the multiplication can not be issued.  

If both inputs are numbers:

```js
let a = 3;
let b = -4;
const multiplyThis = multiply(a, b);
console.log(multiply); // -12
```

If one of the inputs is not a number:
```js
a = 3;
b = 'a';
const multiplyThis = multiply(a, b);
console.log(multiply); // 'Please enter 2 numbers' OR ERROR
```


---

> analyze a user's solution to this challenge

## [Apostatize](https://www.codewars.com/users/Apostatize)

```js
function multiply(a, b){
    // typeof === number returns false for null or empty values
    if (typeof a === "number" && typeof b === "number") {
      return a * b;
    } else {
      return 'Please enter 2 numbers';
    }
  }
```

### Strategy

Apostitize solved this problem by using logic and a math formula. She/he anticipates that the users could possibly provide not only the right inputs but also the wrong ones. Thus logic statement is included in the function so that the result will be issued accordingly. 

### Implementation

**if... else**: In this case, it is true if both arguments are numbers. Then the function will be nicely executed and the return value will be the supposed number/result. Else, it will be false. The function will be still executed but the return value will be an indication that the user that they have put something which is not a number.

**=== (strict equality sign)**: It is used as the required condition to be met in `if...`. It is used to specified the arguments/inputs by users are the number type of data.

**&& (logical and)**: It is used  as the required condition to be met in `if...`. It is used to combine two conditions (which are: argument a must be a number and argument b must be also a number) and to ensure that both conditions are met, so that the function condition could be true, or not it turns to be false.

**the * multiplication sign** : It is used to symbolized that arg a is multiplied by arg b. 



### Possible Refactors

This strategy could also be implemented with these Implementation ...

- an `alert` for false return value, just for a clearer notice for the users and a little interaction. 

---

> analyze another user's solution to this challenge

## User deleted, it is voted to be second best practice.

```js
function multiply(a, b){
    if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
      return 0;
    }
    return a * b;
  }
```

### Strategy

Similar to previous user, logic and math formula are used here. Differently, this user put a complicated if condition and use a return value of 0 to indicate that the inputs inserted by users are not type of data expected (number).

### Implementation


**if... else**: In this case, it is true if arg a is not a number, three ors which maybe means an and, argument b is not a number. Then the function will be executed and the return value will be 0. Else, the condition will be false, which means both args are numbers and the will be executed and provide the result of the multiplication.

**!= (not equality sign)**: Here it seems not quite right if she/he wants to be specified a type of data (number).

**|| (logical or)**: The use of or (||) here combined with not sign (!) makes it together as logical and (&&).

**the * multiplication sign** : It is used to symbolized that arg a is multiplied by arg b. 


### Possible Refactors

This strategy could also be implemented with these Implementation ...

- It would be nice if the logic to be simplified.
- It would be nice to not give 0 as the return value for this problem, as some users might think that it is a valid multiplication result (like in an example `3 * 0 = 0`). Then they would probably see this function is a malfunctioned function.

---

## Notes

Studying `Apostatize` solution reminds me to be more details, to provide `a check` by using `if...else`, even for the simple problem.

Studying `no name` solution make me frown due to its complicated codes, yet correct and runs perfectly and it looks fancy. Still I think that I will stick to a simple but details code. Cheers! :)

