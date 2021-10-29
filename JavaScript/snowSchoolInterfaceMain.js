//This is the javascript for the snow school interface Directly below are the inital variables

const classNav = document.getElementById("classNavigation");
const courseVideo = document.getElementById("courseVideo");
const closeButton = document.getElementById("closingButton");
const lessonPanel = document.getElementById("lessPan");
const videoButton = document.getElementById("lessCon");


//Here are the functions for the lesson nav bar

const openClassNavTwo = () => {
    classNav.style.width = "100%";
}

const openClassNav = () => {
    document.getElementById("initialCourseName").style.display = "none";
    document.getElementById("restOfCourses").style.display = "block";
    closeButton.style.display = "block";
    classNav.style.alignItems = "flex-start";
    classNav.style.justifyContent = "center";
    classNav.style.height = "50%";
};

const openClassVideo = () => {
    videoButton.innerHTML = '<img src="../../src/SINTER Snow School Exit Icon.png" onclick="closeNavTab()">';
    document.getElementById("initialCourseName").style.display = "none";
    document.getElementById("restOfCourses").style.display = "none";
    closeButton.style.display = "flex";
    classNav.style.height = "100%";
    courseVideo.style.opacity = "0";
    lessonPanel.style.marginRight = "13%";
    setTimeout(function() { classNav.style.width = "100%" }, 750);
    setTimeout(function() { courseVideo.style.display = "flex"}, 750);
    setTimeout(function() { courseVideo.style.opacity = "1"}, 1200);
    
}

const closeNavTab = () => {
    videoButton.innerHTML = '<img src="../../src/SINTER Snow School Play Icon.png" onclick="openClassVideo()">';
    closeButton.style.display = "none";
    classNav.style.height = "20%";
    classNav.style.width = "60%";
    courseVideo.style.display = "none";
    lessonPanel.style.marginRight = "0";
    document.getElementById("restOfCourses").style.display = "none";
    document.getElementById("initialCourseName").style.display = "flex";
}