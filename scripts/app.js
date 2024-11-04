let menuOpen = false;

function toggleMenu() {
  if(!menuOpen) { // not open please open
    $('#menu').animate({
      right: 0
    }, 420, 'swing');
  }
  else { // open lets close
    $('#menu').animate({
      right: -260
    }, 420, 'swing');
  }
  // toggle the state
  menuOpen = !menuOpen;
} // toggleMenu()