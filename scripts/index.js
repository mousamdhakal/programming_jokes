console.log("JS connected");
document.addEventListener('DOMContentLoaded', async () => {
const response = await fetch(
  "https://official-joke-api.appspot.com/jokes/programming/random"
);
const myJson = await response.json(); 
document.getElementById("front").innerHTML = myJson[0].setup;
document.getElementById("back").innerHTML = myJson[0].punchline;


});

const submitclicked = async () => {
    document.getElementById("front").innerHTML = "";
    document.getElementById("back").innerHTML = "";
  const response = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  );
  const newJson = await response.json(); //extract JSON from the http response
  document.getElementById("front").innerHTML = newJson[0].setup;
  document.getElementById("back").innerHTML = newJson[0].punchline;
};

document.addEventListener("keydown", event => {
  const key = event.keyCode;
  if(key == 13){
    submitclicked();
  }
  if (key == 32) {
    document.getElementById("flipper").style.transform = "rotateY(180deg)";
  }
});
// document.addEventListener("keypress", event => {
//   const key = event.keyCode;
  
// });