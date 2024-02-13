// Function to place an order for a drink
function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    // Check if the drink ordered is coffee
    if (drink === "coffee") {
      // If the drink is coffee, resolve the promise with a success message
      resolve("Order for Coffee Received");
    } else {
      // If the drink is not coffee, reject the promise with an error message
      reject("Order other than Coffee : Rejected");
    }
  });
}

// Function to process an order
function processOrder(order) {
  return new Promise(function (resolve) {
    // Display a message indicating that the order is being processed
    console.log("Order is being Processed");
    // Resolve the promise with a message indicating the order is served
    resolve(`${order} is Served: Thank you :)`);
  });
}

// // Place an order for coffee
// placeOrder("coffee")
//   // If the order placement is successful, continue to process the order
//   .then((orderPlaced) => {
//     console.log(orderPlaced); // Display the order placement message
//     return processOrder(orderPlaced); // Process the order and return the promise
//   })
//   // If the order processing is successful, display the processed order message
//   .then((processedOrder) => {
//     console.log(processedOrder);
//   })
//   // If there's any error during the process, catch and handle it
//   .catch((err) => {
//     console.log(err);
//   });

// Asynchronous function to serve an order
async function serveOrder() {
  // Place an order for coffee and wait for it to be fulfilled
  let orderPlaced = await placeOrder("coffee");
  // Display a message indicating the order placed
  console.log(orderPlaced);
  // Process the order and wait for it to be completed
  let processedOrder = await processOrder(orderPlaced);
  // Display a message indicating the order is processed and served
  console.log(processedOrder);
}

// Call the asynchronous function to serve an order
serveOrder();
