/*
This is the JS for the SINTER pages. Please see the comments for the different types of functions that are being used here. The code is in
the same order as the pages order on the menu, so the landing page functions are first, then the about us, etc.

Jori Carter
*/


//Menu functions
const menu = document.getElementById("myMenu");
const main = document.getElementById("main");

const openNav = () => {
    menu.style.width = "250px";
    main.style.marginLeft = "250px";
    main.style.opacity = "0.5";
    //document.body.style.overflow = none;
};
  
const closeNav = () => {
    menu.style.width = "0";
    main.style.marginLeft = "0";
    main.style.opacity = "1";
    //document.body.style.overflow = hidden;
};

//SlideShow Functions
let index = 0;

const changingPicture = (index) => {
    let picture = document.getElementById("pictureSlide");
    let credits = document.getElementById("photoCredits");

    if (index === 0) {
        picture.src = "src/Sinter Snowmobile Picture Web.jpg";
        credits.innerHTML = "Photo Credits: Arvids Silis"
    } else if (index === 1) {
        picture.src = "src/DSC_0416-1 Web.jpg";
        credits.innerHTML = "Photo Credits: Jori Carter";
    } else if (index === 2) {
        picture.src = "src/Igloo_lights[8748] Web.jpg";
        credits.innerHTML = "Photo Credits: Arvids Silis";
    }
}




const increaseIndex = () => {
    index++;
    if (index > 2) {
        index = 0;
    }
    changingPicture(index);
}

const decreaseIndex = () => {
    index--;
    if (index < 0) {
        index = 2;
    }
    changingPicture(index);
}
//Snow School Page Functions
