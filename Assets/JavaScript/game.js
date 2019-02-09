$(document).ready(function() {
  let clickCount = 0;
  let player;

  $(".characters").on("click", event => {
    //
    if (clickCount === 0) {
      clickCount++;
      let clicked = event.target;
      player = clicked;
      $("#chosenCharacter").append(clicked);
      $(player).attr("id", "player");
    } else {
    }
  });
});
$("#enemies").append($(".characters"));

//   let characters = [
//     {
//       name: "Jon Snow",
//       healthPoints: 200, //life length
//       attackPower: 20, // power of the hit, increases with each hit
//       counterAttackPower: 160 //
//     },
//     {
//       name: "Jaime Lannister",
//       healthPoints: 160, //life length
//       attackPower: 16, // power of the hit, increases with each hit
//       counterAttackPower: 110 //
//     },
//     {
//       name: "White Walker",
//       healthPoints: 220, //life length
//       attackPower: 22, // power of the hit, increases with each hit
//       counterAttackPower: 180 //
//     },
//     {
//       name: "Brienne of Tarth",
//       healthPoints: 180, //life length
//       attackPower: 18, // power of the hit, increases with each hit
//       counterAttackPower: 120 //
//     }
//   ];
//   $(characters).each((key, element) => {
//     $(".names").text(element.name);
//     console.log(element.name);
//   });
// characters.forEach(element => {
//   $(".names").text(element.name);

//   console.log($(".names"));
//   console.log(element.name);
// });
