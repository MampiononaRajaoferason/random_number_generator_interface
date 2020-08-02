var min = 1;
var max = 10;

var getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(getRandom)

var life = 3;

function checker(){
    var user_entry = parseInt(document.getElementById('user_guess').value);
  //  console.log( "You entered " ,user_entry);
    /*
    if life >0 {
  -> user_guess == getRandom => Congratulations and set life = 3, set a new random number
  ->user_guess !== getRandom => you have x trials left, click again and the life is deducted a value of 1 (life--1)
  }
    */
  /*
    if (life ==0){
    -> user_guess == getRandom => congrations and set life = 3, set a new random number
    ->user_guess != getRandom => Game Over and set life =3 with a new random number
  }
  */

  if(user_entry === getRandom & life>=0){
    alert('Congratulations');
    life=3
    getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('output').innerHTML= "You entered "+user_entry;

    text = ""
    document.getElementById('info').innerHTML=text;
    console.log(getRandom);
  }
  else if (user_entry != getRandom) {
      life=life-1;
      if(life>0){
        document.getElementById('output').innerHTML= "You entered "+user_entry;

        var text = "Wrong Answer you have "+ life +" trials left.";
        document.getElementById('info').innerHTML = text;
      }
      else if (life ==0){
        alert("Game Over.")
        life=3
        getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
        text = ""
        document.getElementById('info').innerHTML=text;
        console.log(getRandom);

      }

  }


}
