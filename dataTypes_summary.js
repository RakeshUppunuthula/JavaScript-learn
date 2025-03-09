// primitive datatypes
  // they are : String ,boolean,Number,null,undefined,symbol,BigInt


// refrence Type (or) Non-primitive

  // Arrays,objects,Function

  const firstId = Symbol('12345')
  const secondId =Symbol('12345')

  console.log(firstId===secondId);

  const bigNumber = 123456789n
  console.log(typeof(bigNumber));


  const marvel =["IornMan","CaptianAmerica","Thor","Hulk","BlackPanter"]
  console.log(typeof(marvel));

  let myObject ={

    name : "Rakesh",
    age : 24,
    Height:"175cm"
  }
  console.log(typeof(myObject));
  
  let myFunction = function(){

    console.log("Hello World!");
    
  }
  console.log(typeof(myFunction));
  

/*
  // Primitive DataTypes:

1. Number: Represents both integer and floating-point numbers.
Example: 5, 3.14.

2. String: Represents a sequence of characters enclosed in single, double, or backticks.
Example: "Hello, world!".

3. Boolean: Represents a binary value, either true or false, often used for conditional logic.
Example: true, false.

4. Undefined: Represents a variable that has been declared but hasn't been assigned a value yet.
Example: let x;.

5. Null: Represents the intentional absence of any object or value. It is not an object, but typeof null returns "object" due to a JavaScript bug.
Example: let y = null;

6. Symbol (ES6): Represents a unique and immutable value, often used as object keys.
Example: let uniqueId = Symbol("id");

7. BigInt (ES11): Represents large integers that cannot be represented by the Number type.
Example: let bigNum = 123456789012345678901234567890n;

// Reference (Object) Data Types:

1. Object: Represents a collection of key-value pairs (properties and methods).
Example: { name: "John", age: 30 }.

2. Array: Represents a list-like collection of values, indexed by numbers (integer indices).
Example: [1, 2, 3, 4].

3. Function: Represents a reusable block of code that can be invoked or called with arguments.
Example: function add(x, y) { return x + y; }.

4. Date: Represents dates and times.
Example: let today = new Date();.

5. RegExp: Represents regular expressions for pattern matching.
Example: let regex = /hello/i;

// Range of Primitive DataTypes:

1. Number:
- Represents both integers and floating-point numbers.
- Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
- Smallest Increment: 2^(-52).

2. String:
- Represents a sequence of characters.
- No specific range limit, but practical limits depend on memory and system resources.

3. Boolean:
- Represents true or false.
- Only two possible values: true and false.

4. Undefined:
- Represents a variable that has been declared but hasn't been assigned a value.
- It has only one possible value: undefined.

5. Null:
- Represents the intentional absence of any object or value.
- It has only one possible value: null.

6. Symbol (ES6):
- Represents a unique and immutable value.
- No specific range limit.

7. BigInt (ES11):
- Represents large integers that cannot be represented by the Number type.
- No fixed range; it depends on memory availability.

 
  
  */

//------------------------------------------------------------------

// stack and heap

// primitive Data types uses stack

// non primitive Data types uses Heap

  