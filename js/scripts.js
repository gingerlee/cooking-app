var gallons = parseFloat(prompt("Enter gallons:"));

var toLiters = function(gallons){
  return gallons * 3.785411784;
};

var liters = toLiters(gallons);

alert(liters + " LITERS!")
