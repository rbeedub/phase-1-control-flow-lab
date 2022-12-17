function scuberGreetingForFeet(distance){
    if (distance <= 400) {
    return `This one is on me!`} 
      else if (distance >400 && distance <2000) {
      return `That will be twenty bucks.`} 
      else if (distance >2000 && distance <2500) {
      return `I will gladly take your thirty bucks.`} 
        else if (distance >2500) {
        return `No can do.`
      }
    }

scuberGreetingForFeet(199);

// function ternaryCheckCity(place){
// //   const place = NYC 
//     NYC ? `Ok, sounds good.` : `No go.`;
// // }
// // console.log(ternaryCheckCity(ATL))

// let city = NYC;
// let ternaryCheckCity;

// if (ternaryCheckCity === NYC) {
//   result `OK, sounds good.`; } {
//   } else {
//     result `No go.`;
//   }

function ternaryCheckCity(city){
  return city === "NYC" ? `Ok, sounds good.` : `No go.`;
  }



function switchOnCharmFromTip(amtNum){
  switch(amtNum){
    case `generous`:
      return `Thank you so much.`
    case `not as generous`:
      return `Thank you.`
    default:
      return `Bye.`
}
};

