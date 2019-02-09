$(document).ready(function() {
  let clickCount = 0;
  let clickCount2 = 0;
  let attackCounter = 0;
  let player;
  let defender;
  let playerHealth;
  let initialPower;
  let playerAttackPower;
  let playerCounterAttack;
  let defenderHealth;
  let defenderAttackPower;
  let defenderCounterAttack;

  $(".characters").on("click", event => {
    if (clickCount === 0) {
      clickCount++;
      player = event.target;
      $(player).removeClass("characters");
      $("#chosenCharacter").append(player);

      $(player).attr("id", "player");
      $(".characters").each((index, element) => {
        let $arr = $(".characters").target;
        console.log($arr);
        $("#enemies").append($(".characters"));
      });
      selectDefender();
      playerAttackPower = $(player)
        .find(".attackPower")
        .text();
      initialPower = playerAttackPower;
      console.log("Initial Power", initialPower);
      attack();
    } else {
    }
  });

  function selectDefender() {
    $(".characters").on("click", () => {
      if (clickCount2 === 0) {
        clickCount2++;
        defender = event.target;
        console.log(defender);
        $(".defender").append(defender);
      } else {
      }
    });
  }

  function removeDefender(defeatedPlayer) {
    $(defeatedPlayer).attr("class", "hide");
  }

  function attack() {
    playerHealth = $(player)
      .find(".healthPoints")
      .text();

    playerCounterAttack = $(player)
      .find(".counterAttackPower")
      .text();

    $("#attack").on("click", () => {
      if (playerHealth > 0) {
        defenderHealth = $(defender)
          .find(".healthPoints")
          .text();
        defenderAttackPower = $(defender)
          .find(".attackPower")
          .text();
        defenderCounterAttack = $(defender)
          .find(".counterAttackPower")
          .text();

        if (defenderHealth > 0) {
          playerHealth = playerHealth - defenderCounterAttack;
          console.log("Player Health", playerHealth);
          playerAttackPower =
            parseInt(playerAttackPower) + parseInt(initialPower);
          console.log("Power", playerAttackPower);

          defenderHealth =
            parseInt(defenderHealth) - parseInt(playerAttackPower);
          console.log("Defender Health", defenderHealth);

          $(player)
            .find(".healthPoints")
            .text(playerHealth);

          $(player)
            .find(".attackPower")
            .text(playerAttackPower);

          $(defender)
            .find(".healthPoints")
            .text(defenderHealth);
        } else {
          clickCount2 = 0;
          removeDefender(defender);
          selectDefender();
          attack();
        }
      } else {
        alert("You lost the Game!");
      }
    });
  }
});

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
