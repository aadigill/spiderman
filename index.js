// ##########################################################################
// getting the slider 
let leftslider = document.getElementById('leftslider');
// ##########################################################################

// ##########################################################################
let opennav = document.getElementById('openbtn');
// This button will open nav
// ##########################################################################

// ##########################################################################
let closenav = document.getElementById('closebtn');
// This button will close nav
// ##########################################################################

// ##########################################################################
// This is eventlistener firing to open the slider
opennav.addEventListener('click', function myFunction(x) {
    opennav.style.display = "none";
    closenav.style.display = "block";
    if (x.matches) { // If screen width will be less then 700px  Then slider will open 75%
        leftslider.style.width = "75%";
    }

    else {
        // otherwise it will open 25%
        leftslider.style.width = "25%";
    }

    var w = window.matchMedia("(max-width: 700px)");
    myFunction(w);
});
// ##########################################################################

// ##########################################################################
// This is eventlistener firing to close the slider
closenav.addEventListener('click', function () {
    leftslider.style.width = "0vw";
    opennav.style.display = "block";
    closenav.style.display = "none";
});
// ##########################################################################


