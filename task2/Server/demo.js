const myModule = require("../Modules/myModule");

var flightTickets1 = new myModule.FlightTickets();

// flightTickets1.displayInfo();
console.log(flightTickets1.getTravelDate());

flightTickets1.updateTravelDate("2022-01-02");
console.log(flightTickets1.getTravelDate());