let myPromise = new Promise(function (resolve, reject) {
  const a = 5;
  const b = 5;
  setTimeout(() => {
    if (a === b) {
      resolve("The value is same : Promise fullfiled");
    } else {
      reject("The value is different : Promise rejected");
    }
  }, 2000);
});

// Pending State
// console.log(myPromise);

// fulfilled
myPromise.then((result) => {
  console.log(result);
});

// rejected
myPromise.catch((err) => {
  console.log(err);
});

/*
Certainly! Let's break down this code in simpler terms:

1. **Creating a Promise**:
   - We create a new Promise using the `Promise` constructor. This Promise takes a function as an argument, which in turn takes two parameters: `resolve` and `reject`.
   - Inside this function, we have a `setTimeout` function. This function simulates an asynchronous operation that takes some time (in this case, 2 seconds) to complete.
   - Within the `setTimeout` function, we have a condition that checks if two variables `a` and `b` are equal. If they are equal, the Promise is resolved with the message "The value is same : Promise fulfilled". If they are not equal, the Promise is rejected with the message "The value is different : Promise rejected".

2. **Promise State**:
   - Initially, the Promise is in a pending state, meaning the asynchronous operation is yet to complete. During this time, the `myPromise` variable holds this pending Promise.
   - We can log `myPromise` to see its state, but it's commented out in this code.

3. **Handling Promise Resolution**:
   - We use the `.then()` method to handle the fulfillment of the Promise. If the Promise is resolved (fulfilled), the callback function passed to `.then()` is executed.
   - In our case, the callback function simply logs the result of the resolved Promise to the console.

4. **Handling Promise Rejection**:
   - We use the `.catch()` method to handle the rejection of the Promise. If the Promise is rejected, the callback function passed to `.catch()` is executed.
   - In our case, the callback function simply logs the reason for the rejection to the console.

5. **Execution**:
   - After setting up the Promise and its handlers, the JavaScript engine continues to execute the rest of the code.
   - After 2 seconds (due to the `setTimeout`), the Promise either resolves or rejects based on the condition.
   - If `a` and `b` are equal, the Promise is fulfilled and the message "The value is same : Promise fulfilled" is logged to the console.
   - If `a` and `b` are not equal, the Promise is rejected and the message "The value is different : Promise rejected" is logged to the console.

In simple terms, this code demonstrates how Promises work in JavaScript to handle asynchronous operations. The `.then()` method is used to handle successful outcomes (resolve), and the `.catch()` method is used to handle errors (reject) that may occur during the execution of asynchronous tasks.
*/


