//Gallons to Liters
// var fromGallons = parseFloat(prompt("Enter gallons:"));
// var gallonsToLiters = function(fromGallons){
//   return fromGallons * 4.546;
// };
// var toLiters = gallonsToLiters(fromGallons);
// alert(toLiters + " LITERS!")

//Liters to Gallons
var fromLiters = parseFloat(prompt("Enter Liters:"));

var litersToGallons = function(fromLiters) {
  return fromLiters * 0.22;
};

var toGallons = litersToGallons(fromLiters);

alert(toGallons + " GALLONS!");
