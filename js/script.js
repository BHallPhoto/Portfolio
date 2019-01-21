// set up text to print, each item in array is new line
var aText = new Array(
"Thanks for contacting Bristol!", 
"He will get back to you at a timely manner. :)"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents =  ' ';
  iRow = Math.max(0, iIndex-iScrollAt);
  var destination = document.getElementById("anim-typewriter");

  while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
  }

  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
    iArrLength = aText[iIndex].length;
    setTimeout("typewriter()", 500);
  }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

function startTimer() {
  var maxTime = 5000, // 5 seconds
      startTime = Date.now();

    var interval = setInterval(function () {
      if ($('.thankyou_message').is(':visible')) {
        typewriter();
          clearInterval(interval);
      } else {
          // still hidden
          console.log('Started timer for typewriter')
          if (Date.now() - startTime > maxTime) {
              // hidden even after 'maxTime'. stop checking.
              clearInterval(interval);
          }
      }
    }, 500 // 0.5 second (wait time between checks)
  )
}