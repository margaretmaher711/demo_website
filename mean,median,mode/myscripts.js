// function calculateStatistics() {
//   const numbersInput = document.getElementById("numbersInput").value;
//   // Validate the input format
//   if (!isValidInput(numbersInput)) {
//     document.getElementById("errorText").textContent =
//       "Invalid input format. Please enter numbers separated by commas.";
//     return;
//   }

//   const numbers = numbersInput.split(",").map((num) => Number(num.trim()));

//   // Calculate the mean
//   const mean = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;

//   // Calculate the median
//   const middleIndex = Math.floor(numbers.length / 2);
//   const median =
//     numbers.length % 2 === 0
//       ? (numbers[middleIndex - 1] + numbers[middleIndex]) / 2
//       : numbers[middleIndex];

//   // Calculate the mode

//   const frequencyMap = new Map(); // Create a Map to store the frequency of each number

//   // Initialize variables to track the maximum frequency and modes
//   let maxFrequency = 0;
//   let modes = [];

//   // Iterate over each number in the array
//   for (const num of numbers) {
//     // Get the current frequency of the number from the frequency map
//     // If the number is not present in the map, default to 0
//     const frequency = (frequencyMap.get(num) || 0) + 1;

//     // Update the frequency of the number in the map
//     frequencyMap.set(num, frequency);

//     // Check if the current frequency is greater than the maximum frequency
//     if (frequency > maxFrequency) {
//       // If so, update the maximum frequency
//       maxFrequency = frequency;
//       // Reset the modes array with the current number as the only mode
//       modes = [num];
//     } else if (frequency === maxFrequency) {
//       // If the current frequency is equal to the maximum frequency,
//       // add the number to the modes array
//       modes.push(num);
//     }
//     console.log(`frequency ${frequency}`);
//     console.log(`modes ${modes}`);
//   }

//   // At the end of the loop, the modes array will contain the mode(s) of the dataset

//   resultString.innerHTML = `Mean: ${mean}, Median: ${median}, Mode: ${modes.join(
//     ", "
//   )}`;
//   document.getElementById("errorText").textContent = "";
//   // You can display the resultString on the page or perform any other desired action
// }
// function isValidInput(numbersInput) {
//   // Check if the input is empty or does not contain any numbers
//   if (!numbersInput || !numbersInput.match(/\d/)) {
//     return false;
//   }

//   // Check if the input contains only numbers separated by commas
//   return /^\s*\d+(\s*,\s*\d+)*\s*$/.test(numbersInput);
// }

//Ajax request -> request refresh xxxxxx

//backend -> send data -> api -> response
//frontend -> get data -> display data

//fakeApi -> jsonplaceholder -> integration

/////////////////////////////////////////////////////
// for (var i = 0; i < 6; i++) {
//   (function (x) {
//     setTimeout(() => {
//       console.log(x);
//     }, 2000);
//   })(i);
// }

// for (let i = 0; i < 6; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 2000);
// }
//i=6
//0 1 2 3 4 5 delay 2sec
//6 6 6 6 6 6

/////////////////////////////
// // let ids;
// setTimeout(() => {
//   //get ids
//   let ids = [1, 2, 3];
//   console.log(ids); //[1,2,3]

//         setTimeout(() => {
//             //get user by id
//             let user = {
//             name: "mai",
//             id: ids[0],
//             };
//             console.log(user); //{}
//                         setTimeout(() => {
//                         //get cart by username
//                         let cart = {

//                             name: user.name,
//                             cart: ["bag", "shoes"],
//                         };
//                         console.log(cart);

//                                     setTimeout(()=>{
//                                         let payment={

//                                         }
//                                                         setTimeout(()=>{
//                                                             let orderDetails = {}
//                                                         },6000)
//                                     },5000)
//                         }, 3000);
//             // console.log(cart);     //is not defined
//         }, 4000);

//   //   console.log(user); //is not defined
//   console.log(cart);//is not defined
// }, 2000);
// // console.log(ids); //undefined //[1,2,3]
// // console.log(user); //is not defined
// console.log(cart);//is not defined

// callback hell

//////////////// Promise /////////////////////////////
//promise -> object -> state -> pending
//pending -> fullfilled -> f1
//pending -> rejected -> f2

// x = 10;
// console.log(x);

// x = //get data -> async code
// console.log(x); // data xxxxxxxxxxxxxx

// let p = new Promise(function (resolve, reject) {
//   console.log(arguments);

//   //state -> fullfilled -> then
//   resolve();

//   //state -> rejected -> catch
//   reject();

//   //   setTimeout(() => {
//   //     console.log("hello");
//   //   }, 2000);
// });
// console.log(p);
// p
//   //promise -> fullfilled
//   .then(() => {
//     console.log("then");
//   })
//   //promise -> rejected
//   .catch(() => {
//     console.log("catch");
//   });

//create promise
//get Id
let getId = new Promise(function (resolve, reject) {
  setTimeout(() => {
    //get ids -> backend
    let ids = [1, 2, 3];
    if (ids) {
      //state fullfilled -> then
      resolve(ids);
    } else {
      //state -> rejected -> catch ->
      reject("error :ids are not found");
    }
  }, 2000);
});

//get User By Id
function getUserById(id) {
  //create promise
  let getUser = new Promise(function (resolve, reject) {
    //get user ->backend
    setTimeout(() => {
      let user = {
        name: "mai",
        id: id,
      };

      if (user) {
        resolve(user);
      } else {
        reject("error : user is not found");
      }
    }, 4000);
  });

  return getUser;

  //   getUser
  //     .then((user) => {
  //       console.log("then", user);
  //       //
  //     })
  //     .catch((err) => {
  //       console.log("catch", err);
  //     });
}

//get Cart By User name
function getCartByUser(name) {
  let getCart = new Promise(function (resolve, reject) {
    setTimeout(() => {
      let cart = {
        name: name,
        cart: [],
      };

      if (cart) {
        resolve(cart);
      } else {
        reject("error : cart is not found");
      }
    }, 3000);
  });

  return getCart;
}

//handle promise
// getId
//   .then((ids) => {
//     console.log("then ", ids);
//     //create promise
//     return getUserById(ids[2]);
//     //   .then(() => {})
//     //   .catch(() => {});
//   })
//   //promise -> user
//   .then((user) => {
//     console.log("then", user);
//     return getCartByUser(user.name); //return promise
//   })
//   //promise -> cart
//   .then((cart) => {
//     console.log("then", cart);
//   })
//   //catch error
//   .catch((err) => {
//     console.log(err);
//   });

// let p = new Promise(() => {
//   console.log("hello1");
// });
// console.log("hello2");

//ES8 -> async await

async function handlePromises() {
  console.log("first");
  let ids = await getId;
  console.log(ids); //[1,2,3]

  let user = await getUserById(ids[0]);
  console.log(user); //{}
  console.log("second");

  let cart = await getCartByUser(user.name); // -> web api
  console.log(cart);
  console.log("third");
}

// async function handlePromises() {
//   try {
//     let ids = await getId;
//     console.log(ids); //[1,2,3]

//     let user = await getUserById(ids[0]);
//     console.log(user); //{}

//     let cart = await getCartByUser(user.name); // -> web api
//     console.log(cart);
//   } catch (e) {
//     console.log(e);
//   }
// }

handlePromises();
console.log("outside fucntion");
console.log("outside fucntion2");

// //first second third outside
// //first  outside fucntion ids user second

setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);

// integeration backend
let api = "https://jsonplaceholder.typicode.com/posts";

// //fetch -> get  -> return promise -> Response

async function getPosts() {
  let postsResponse = await fetch(api);
  //   console.log(postsResponse.json());
  let postsArr = await postsResponse.json(); //return promise -> array
  console.log(postsArr);
  displayPosts(postsArr);
}

// getPosts();

function displayPosts(postsArr) {
  postsArr.forEach((element) => {
    console.log(element);
    let div = document.createElement("div");
    div.classList.add("postContainer");
    div.innerHTML = `<h2>${element.body}</h2><p>${element.body}</p>`;
    document.body.append(div);
  });
}

// try{
// //piece of code -> error
// }catch(e){
// //handling error
// }

// try {
// //   let y = 10;
//   console.log(y);
// } catch (e) {
//   console.log(e);
// }

// alert("hello ya user ya gamil");