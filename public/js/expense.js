console.log('loaded');
// JS to listen to button    
element.addEventListener("click", function() {
    document.getElementById("submitButton").innerHTML("hello");
  });

// Grab values from form    
function getValue(){
let expenses_nameInput = document.getElementById('expenses_nameInput').value;
console.log(expenses_nameInput);

let payment_amountInput = document.getElementById('payment_amountInput').value;
console.log(payment_amountInput);

let categorylist = document.querySelector('#category-list').value;
console.log(categorylist);
};

// Send the fetch request to the route to create expense+

