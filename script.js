/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("mytab");
  if (x.className === "tab") {
    x.className += " responsive";
  } else {
    x.className = "tab";
  }
}

/* Tab script */
function openPage(evt, pageName) {
  // Declare all variables
  let i, tabcontent, tablinks;

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
  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.className += " active";
}

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

/* Footer script */
n =  new Date();
y = n.getFullYear();
document.getElementById("year").innerHTML = y;