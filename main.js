var min = 1;
var max = 10;

var getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(getRandom)

var life = 3;

function checker(){
    var user_entry = parseInt(document.getElementById('user_guess').value);
  //  console.log( "You entered " ,user_entry);
    /*
    1-whenever the user guesses right => we congratulate him/her and reset the random number
    2-whenever The user enters the wrong number, we deduct the life the value of one:
      2-a)if life >0 => we dont need to change the random number value, we just need to inform
      the player and print his left trials
      2-b)if life==0 => game over, we reset the random number

  */




  if(user_entry === getRandom){
    alert('Congratulations, Please guess the new number');
    life=3
    getRandom = Math.floor(Math.random() * (max - min + 1)) + min;

    text = ""
    document.getElementById('info').innerHTML=text;
    console.log(getRandom);
    //clear the input
    document.getElementById('form_input').reset()

  }
  else if (user_entry != getRandom) {
      life=life-1;
      if(life>0){

        var text = "Wrong Answer you have "+ life +" trials left.";
        document.getElementById('info').innerHTML = text;
        /*We dont change the random number value here*/
      }
      else if (life ==0){
        alert("Game Over.The Correct is " +getRandom)
        life=3
        getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
        text = "Please Enter a number for a new game"
        document.getElementById('info').innerHTML=text;
        document.getElementById('output').innerHTML= "";
        console.log(getRandom);
        //clear the input
        document.getElementById('form_input').reset()

      }

  }


}
