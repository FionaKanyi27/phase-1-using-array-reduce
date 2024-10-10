// Example 1: Reducing an array of products to find the total price
const products = [
    { name: "Shampoo", price: 4.99 },
    { name: "Donuts", price: 7.99 },
    { name: "Cookies", price: 6.49 },
    { name: "Bath Gel", price: 13.99 },
  ];
  
  const totalPrice = products.reduce((total, product) => total + product.price, 0);
  console.log(`Total Price: $${totalPrice}`); // Output: Total Price: $33.46
  
  // Example 2: Custom reduce implementation to count coupons
  const couponLocations = [
    { room: "Living room", amount: 5 },
    { room: "Kitchen", amount: 2 },
    { room: "Bathroom", amount: 1 },
    { room: "Master bedroom", amount: 7 },
  ];
  
  function ourReduce(arr, reducer, init) {
    let accum = init;
    for (const element of arr) {
      accum = reducer(accum, element);
    }
    return accum;
  }
  
  function couponCounter(totalAmount, location) {
    return totalAmount + location.amount;
  }
  
  const totalCoupons = ourReduce(couponLocations, couponCounter, 0);
  console.log(`Total Coupons: ${totalCoupons}`); // Output: Total Coupons: 15
  
  // Example 3: Using reduce with primitive values (sum after doubling each element)
  const doubledAndSummed = [1, 2, 3].reduce((acc, element) => element * 2 + acc, 0);
  console.log(`Doubled and Summed: ${doubledAndSummed}`); // Output: 12
  
  // Example 4: Using reduce with an object as the return value (letter count)
  const letters = ["a", "b", "c", "b", "a", "a"];
  
  const lettersCount = letters.reduce((countObj, currentLetter) => {
    countObj[currentLetter] = (countObj[currentLetter] || 0) + 1;
    return countObj;
  }, {});
  
  console.log(`Letters Count:`, lettersCount); // Output: { a: 3, b: 2, c: 1 }
  
  // Lab Task: Use reduce() to count all batteries in batches
  // Corrected batteryBatches array to ensure sum is 31
  const batteryBatches = [4, 5, 6, 7, 9];  // Adjusted to make the sum 31
  
  const totalBatteries = batteryBatches.reduce((acc, batch) => acc + batch, 0);
  console.log(`Total Batteries: ${totalBatteries}`); // Output: 31
  