/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var ticketFare = 800;
var passengerAge = 20;
var isStudent = true;

if (passengerAge < 10) {
    console.log("You are totally free");

}
else if (isStudent) {
    console.log(0.5 * ticketFare);
}
else if (passengerAge >= 60) {
    console.log(0.85 * ticketFare);
}
else {
    console.log("Your ticket fare " + ticketFare + " tk");
}