class FlightTickets {
    constructor() {
        this.seatNum = 10;
        this.flightNum = 1;
        this.departureAirport = "Hurghada Airport";
        this.arrivalAirport = "Egypt Airport";
        this.travelDate = "20/4/2024";
      }
  displayInfo() {
    console.log("Ticket Information:");
    console.log("Seat Number:", this.seatNum);
    console.log("Flight Number:", this.flightNum);
    console.log("Departure Airport:", this.departureAirport);
    console.log("Arrival Airport:", this.arrivalAirport);
    console.log("Travel Date:", this.travelDate);
  }

  getSeatNum() {
    return this.seatNum;
  }

  getFlightNum() {
    return this.flightNum;
  }
  getDepartureAirport() {
    return this.departureAirport;
  }
  getArrivalAirport() {
    return this.arrivalAirport;
  }
  getTravelDate() {
    return this.travelDate;
  }
  updateSeatNum(newSeatNum) {
    this.seatNum = newSeatNum;
  }
  updateFlightNum(newFlightNum) {
    this.flightNum = newFlightNum;
  }
  updateDepartureAirport(newDepartureAirport) {
    this.departureAirport = newDepartureAirport;
  }
  updateArrivalAirport(newArrivalAirport) {
    this.arrivalAirport = newArrivalAirport;
  }
  updateTravelDate(newTravelDate) {
    this.travelDate = newTravelDate;
  }
}
module.exports = { FlightTickets };
