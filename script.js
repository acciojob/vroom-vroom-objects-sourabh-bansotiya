// Complete the js code
function Car(make, model) {
	this.make;
	this.model;
}
getMakeModel(){
	return `${make}, ${model}`;
}

function SportsCar(make, model, topSpeed) {
	Object.setPrototypeOf(SportsCar, Car);
}
getTopSpeed(){
	return `${topSpeed}`;
}

const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed()); // Output: 200

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
