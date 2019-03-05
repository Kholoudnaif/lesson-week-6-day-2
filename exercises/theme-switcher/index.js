// click event for gray button

// click event for white button


//document.getElementById("grayButton").onclick = switchGray;
//document.getElementById("whiteButton").onclick = switchWhite;
/*document.getElementById("gifButton").onclick = gifButton;*/

/*function switchGray() {
    // change background to gray
    // change font to white
  //  document.body.style.backgroundColor = "gray";
}*/


/*function switchWhite() {
    // change background to white
    // change font to black
}*/

  $('#whiteButton').on('click',function switchWhite(){

    document.body.style.backgroundColor = "white";
    myfunction1();

  });

  $('#grayButton').on('click',function switchGray(){

    document.body.style.backgroundColor = "gray";
    myfunction2();
  });

function myfunction1(){

   document.body.style.color = "black";
}

function myfunction2(){

   document.body.style.color = "white";
}





//حل سامي
/*$("#grayButton").on("click",switchGray);

function switchGray() {
    // change background to gray
    // change font to white
    let body = $("body");

    body.css({
    "background":"gray",
    "color":"white"});

}

$("#whiteButton").on("click",switchWhite);
function switchWhite() {
    // change background to white
    // change font to black
    let body = $("body");

    body.css({
    "background":"white",
    "color":"black"});
}*/
//حل سامي


/*
function gifButton() {
    // change background to white
    // change font to black
    //document.body.style.backgroundImage = "url('https://media.giphy.com/media/HGvjR72DXRHWw/giphy.gif')";
    document.body.style.backgroundColor = "blue";
}*/
