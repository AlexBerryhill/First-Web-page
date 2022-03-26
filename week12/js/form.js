function validateStartState(){
    let startState= document.getElementById("startState").value;
    let pattern ='/[a-zA-Z]{2}/';
    if(pattern.search(startState)>=0){
        document.getElementById("start_error").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("start_error").innerHTML = "Input not valid";
        document.getElementById('startState').focus();
        return false;
    }
}

function validateEndState(){
    alert("hit")
    let endState= document.getElementById("endState").value;
    alert(endState)
    let pattern ='/[a-zA-Z]{2}/';
    alert(pattern.search(endState))
    if(pattern.search(endState)>=0){
        document.getElementById("end_error").innerHTML = "";
        return true
    }
    else{
        document.getElementById("end_error").innerHTML = "Input not valid";
        document.getElementById('endState').focus();
        return false
    }
}

function submitForm(){
    var startCity= document.getElementById("startCity").value;
    var startState= document.getElementById("startState").value;
    var endCity= document.getElementById("endCity").value;
    var endState= document.getElementById("endState").value;
    let filename = "/cgi-bin/cs213/mileageAjaxJSON?startCity="+startCity+"&startState="+startState+"&endCity="+endCity+"&endState="+endState;
    
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const resultsJSON = JSON.parse(xhttp.responseText);
            const trip = resultsJSON.trip
            var text =  "Starting City: "+trip.startcity+
                        ", "+trip.startstate+
                        "\nEnding City: "+trip.endcity+
                        ", "+trip.endstate+
                        "\nTotal Miles: "+trip.miles+
                        "\nTransport Mode: ";
            if("tmode" in trip){
                for(let i=0; i<trip.tmode.length; i++){
                    text += " "+trip.tmode[i];
                }
            }
            else text += " None";
            document.getElementById("results").innerHTML=text;
        }
        else if(this.status == 404){
            document.getElementById("results").innerHTML="404 File not found";
        }
    };
    xhttp.open("GET", filename, true);
    xhttp.send();
}

function init(){
    document.getElementById("submit").addEventListener("click", function(){
        if (validateStartState() && validateEndState()){
            submitForm();
        }
    });
}