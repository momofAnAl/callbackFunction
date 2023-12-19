////////// PROBLEM 1 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/
// invoke means call the funcrion --> cb()
const multiply = (num1, num2, cb) => {   // multiply is higher order function
  const multipliedNUm = num1 * num2;
  cb(multipliedNUm);
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

multiply(4, 3, function(answer) {
  console.log('The answer is ' + answer) //should console.log 12
});



////////// PROBLEMS 2 - 6 //////////

// The names array will be used in problems 2 - 6.

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']
// Do not edit the code above.



////////// PROBLEM 2 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

// CODE HERE 
const first = (ar, callbackFunc) => callbackFunc(ar[0]);

// function first(ar, callbackFunc){
//   callbackFunc(ar[0]);
// }


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

first(names, firstName => {
  console.log('The first name in names is ' + firstName)
})
console.log('---');



////////// PROBLEM 3 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

// CODE HERE
const last = (ar, callbackFunc) => callbackFunc(ar[ar.length-1]);





// first(names, firstName => {
//   console.log('The first name in names is ' + firstName)
// })


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// function last(ar, callbackFunc){
//   callbackFunc(ar[ar.length - 1])
// }

last(names, lastName => {
  console.log('The last name in names is ' + lastName)
})



////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

// CODE HERE 
const contains = (ar, name, callbackFunc) => {
  if (ar.includes(name)){
    callbackFunc(true)
  } else {
    callbackFunc(false)
  }
}
// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

contains(names, 'Colt', result => {
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
})



////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
  Hint: you can use a nested for loop to do this.
*/

// CODE HERE
// loop through elements in array
// ar = [value, value1, value 2, value 3]
// callbackFunc = []
const uniq = (ar, callbackFunc) => {
  for (i = 0; i < ar.length - 1; i++) {
    for (j = i + 1; j < ar.length; j++) {
      if (ar[i] === ar[j]) {
        ar.splice(j, 1);
      }
    }
  } 
  return callbackFunc(ar);  
}

uniq([1,2,4,5,7,2,1,4,6], answer  => console.log('The answer is ' + answer));


/*
  Invoke the uniq function, passing in the names array from above and a callback function.
  The callback function should take in one parameter called uniqArr.
  The callback should print a string that says:
  'The new names array with all the duplicate items removed is [UNIQARRPARAM].'
*/





////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

const each = (names, callbackFunc) => {
  for (const name of names) {
    callbackFunc(name, names.indexOf(name));
  }
}
// /*
//   Invoke the each function, passing in the names array and a callback function.
//   The callback function should take in two parameters, item and index.
//   The callback should print a string that says:
//   'The item at index [INDEXPARAM] is [ITEMPARAM].'
// */

each(names, (name, idx) => {
  console.log(`The item at index ${idx} is ${name}`);
});

////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
]
// Do not edit the code above.

const getUserById = (users, id, callbackFunc) => {
  for (const user of users) {
    if (user.id === id) {
      callbackFunc(user);
    }
  }
}


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

getUserById(users, '16t', user => {
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
})

////////// CHALLENGE //////////

/*
  You'll be writing a higher order function that returns
  another function. 

  Create a function called addingFactory that takes in
  one parameter (it will be a number).

  addingFactory should return a function that takes in
  one parameter (this will be another number).

  The (inner) function that's being returned should add
  the two parameters together and return the sum.
*/

const addingFactory = (num) => (num1) => num + num1;

// const addingFactory = (num) => {
//   return function(num1) {
//     return num + num1;
//   }
// }
/*
  Now that you have addingFactory, you can create other
  functions from it. 

  You're going to invoke addingFactory and save the result
  to a new variable. 

  Create a variable called addTen and set it equal to 
  the invocation of addingFactory passing in the number
  10 as an arguemnt.
*/

const addTen = addingFactory(10);

/*
  Now the inner function is stored in the addTen variable! 

  Call the addTen function passing in another number and
  console log the result.

  Call it a second time, passing in a different number
  to see the different outputs.
*/

console.log(addTen(8));
console.log(addTen(20));
/*
  Let's make another function from the addingFactory. 

  This time, pass in your favorite number and name
  the variable addNUMBER with the name of the number
  you chose. 

  Once you create that, you can invoke the function
  to add any number to your favorite number!
*/

const addSeven = addingFactory(7);

console.log(addSeven(7));
console.log(addSeven(20));