const Vehicle = {
  make: "",
  model: "",
  year: "",
  color: "",
  fuelType: "",
  engineCapacity: "",
  transmissionType: "",
  numberOfWheels: "",
  numberOfDoors: "",
};

const Car = Object.create(Vehicle);
Car.numberOfSeats = "";
Car.numberOfAirbags = "";
Car.carType = "";
Car.carBodyType = "";
Car.carFuelEfficiency = "";

const SUV = Object.create(Vehicle);
SUV.groundClearance = "";
SUV.cargoVolume = "";
SUV.towingCapacity = "";
SUV.suvType = "";
SUV.suvBodyType = "";
SUV.suvFuelEfficiency = "";
