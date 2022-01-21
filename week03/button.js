

//sidebar functions
function openSidebar() {
    document.getElementById("mySidebar").style.display = "block";
}
  
function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
}

//open the Form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

var modalForm = document.getElementById('myForm');

// When the user clicks anywhere outside of the form, close it
window.onclick = function(event) {
  if (event.target == document.getElementById('myForm')) {
    document.getElementById('myForm').style.display = "none";
  }
}

//Go to top button
// When the user clicks on the button, scroll to the top of the page
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}