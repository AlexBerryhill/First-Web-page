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
    closeForm();
  }
}