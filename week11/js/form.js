//open the Form
function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementsByClassName("nxt-btn").style.display = "none";
    document.getElementsByClassName("pre-btn").style.display = "none";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementsByClassName("nxt-btn").style.display = "flex";
    document.getElementsByClassName("pre-btn").style.display = "flex";
}

function setUpForm(){
  var modalForm = document.getElementById('myForm');

  // When the user clicks anywhere outside of the form, close it
  window.onclick = function(event) {
    if (event.target == document.getElementById('myForm')) {
      closeForm();
    }
  }

  document.getElementById("add_to_cart").addEventListener('click', function() {
    document.getElementById('first_name').focus();
  });

  document.getElementById("cart").addEventListener('reset', function() {
    document.getElementById('first_name').focus();
  });

  document.getElementById("cart").addEventListener('submit', function() {
    validateSubmit();
  });

  document.getElementById("phone").addEventListener('change', function() {
    phoneValidation();
  });
}

//Accessory Total Calculation
function checkAccessory(item){
  if(document.getElementById(item).checked){
    document.getElementById(item).checked = false
  }
  else{
    document.getElementById(item).checked = true
  }
  calcTotal()
}

function calcTotal(){
  var total = 700;
  if(document.getElementById('item_0').checked){
    total += 5
  }
  if(document.getElementById('item_1').checked){
    total += 10
  }
  if(document.getElementById('item_2').checked){
    total += 15
  }
  if(document.getElementById('item_3').checked){
    total += 20
  }
  document.getElementById('total').value = '$'+String(total)+".00"
}

//phone validation
function phoneValidation() {
  let phone = document.getElementById('phone').value
  let pattern = /\d{3}\x2D\d{3}\x2D\d{4}/
  if (phone.search(pattern)==0){
    document.getElementById('phoneError').innerHTML =''
    return true
  }
  else{
    document.getElementById('phoneError').innerHTML= 'This is Invalid'
    return false
  }
}

//credit card number validation
function creditCardValidation() {
  let card = document.getElementById('credit_card').value
  let pattern = /\d{4}\s\d{4}\s\d{4}\s\d{4}/
  if (card.search(pattern)==0){
    document.getElementById('cardError').innerHTML =''
    return true
  }
  else{
    document.getElementById('cardError').innerHTML= 'This is Invalid'
    return false
  }
}

//Exp Date validation
function expDateValidation() {
  let expDate = document.getElementById('exp_date').value
  let pattern = /\d{2}\x2F\d{4}/
  let monthPattern = /\d{2}\x2F/
  let monthToInt = /\d{2}/
  let yearPattern = /\d{4}/
  var month = String(expDate.match(monthPattern)).match(monthToInt)
  var year = expDate.match(yearPattern)
  if (expDate.search(pattern)==0 && month >= 1 && month <= 12 && year >= 2020){
    document.getElementById('expError').innerHTML =''
    return true
  }
  else{
    document.getElementById('expError').innerHTML= 'This is Invalid'
    return false
  }
}

//Validate the submit
function validateSubmit(){
  if(phoneValidation() == false){
    document.getElementById('phone').focus();
    return false
  }
  else if(creditCardValidation() == false){
    document.getElementById('credit_card').focus();
    return false
  }
  else if(expDateValidation() == false){
    document.getElementById('exp_date').focus();
    return false
  }
  else{
    return true
  }
}