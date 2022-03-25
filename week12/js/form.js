function init(){
    document.getElementById("submit").addEventListener("click",submitForm())
}

function submitForm(){
    var startCity= document.getElementById("startCity").value;
    var startState= document.getElementById("startState").value;
    var endCity= document.getElementById("endCity").value;
    var endState= document.getElementById("endState").value;

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(xhttp.responseText);
        }
        else if(this.status == 404){

        }
    };
    xhttp.open("GET", "/cgi-bin/cs213/mileageAjaxJSON",true);
    xhttp.send();
}