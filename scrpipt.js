const loader = document.querySelector('.loader-wrapper')
const content = document.querySelector('.content')
const main = document.querySelector('.pages')

function init() {

  setTimeout(() => {

   
    loader.style.display = 'none';


    main.style.display = 'block';
    setTimeout(() => main.style.opacity = 1, 50);
  }, 4000);

  content.style.display='none';


}

init();


function openJob(evt, jobName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(jobName).style.display = "block";
  evt.currentTarget.className += " active";
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("_navBar").style.top = "0";
  } else {
    document.getElementById("_navBar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}




