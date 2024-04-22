let playerone = document.querySelector(".playerone");
let playeroneinput = document.querySelector(".playeroneinput");
let playeronebtn = document.querySelector(".playeronebtn");
let playeroneerr = document.querySelector(".playeroneerr");

let playertwo = document.querySelector(".playertwo");
let playertwoinput = document.querySelector(".playertwoinput");
let playertwobtn = document.querySelector(".playertwobtn");
let playertwoerr = document.querySelector(".playertwoerr");

let two = document.querySelector(".two");
let one = document.querySelector(".one");
let chancetwo = document.querySelector(".chancetwo");

let playeronevalue;
let chance = 3;

playeroneinput.addEventListener("keyup", function (){
  playeroneerr.innerHTML = "";
});



playeronebtn.addEventListener("click", () => {
   if(playeroneinput.value){
       if(playeroneinput.value - 20){
         if(playeroneinput.value > 0 && playeroneinput.value < 10){
            playeronevalue = playeroneinput.value;

            two.style.display = "block";
            one.style.display = "none";
            
         }
         else{
          playeroneerr.innerHTML = "Please Enter Number between 1 to 9";
         }
    }
    else{
             playeroneerr.innerHTML = "Please Enter Your Number Value";
    }
  
} else {
  playeroneerr.innerHTML = "Please Enter Your Input Value";
}
});




playertwobtn.addEventListener("click", () => {
  if(playertwoinput.value){
    if(playertwoinput.value - 20){
        if(playertwoinput.value > 0 && playertwoinput.value < 10){
           if(playeronevalue == playertwoinput.value){
            
            document.write("Player Two Win");
            
            
           }else{
            chance--;
            if(chance !== 0){
              chancetwo.innerHTML = "Chance-" + chance;
            }else{
              
              document.write("Player One Win");
              
             
            }
           }
        }
        else{
         playertwoerr.innerHTML = "Please Enter Number between 1 to 9";
        }
   }
   else{
     playertwoerr.innerHTML = "Please Enter Your Number Value";
   }
 
} else {
 playertwoerr.innerHTML = "Please Enter Your Input Value";
}
});


