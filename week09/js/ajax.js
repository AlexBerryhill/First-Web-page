function populateTable(filename){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("city_list").innerHTML=xhttp.responseText
        }
    }; 
    xhttp.open("GET", filename, true);
    xhttp.send();
}

function searchFile(){
    file = document.getElementById('filename').value
    let filename = "";
    if (file.search('\x2F')>=0 || file.search('/\x5C/')>=0){
        filename = file;
    }
    else{
        filename = './txt/'+file;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const myJson = JSON.parse(xhttp.responseText);
            const students = myJson.students
            let table = "<table><tr><th>Name</th><th>Address</th><th>Major</th><th>GPA</th></tr>"
            for (let i = 0; i<students.length; i++){
                const student = students[i]
                table+= "<tr><td>"+student.first+" "+student.last+"</td>"+
                        "<td>"+student.address.city+", "+student.address.state+" "+student.address.zip+"</td>"+
                        "<td>"+student.major+"</td>"+
                        "<td>"+student.gpa+"</td></tr>";
            }
            table += "</table>";
            document.getElementById("json_list").innerHTML=table;
        }
        else if(this.status == 404){
            document.getElementById("json_list").innerHTML="404 File not found"
        }
    }; 
    xhttp.open("GET", filename, true);
    xhttp.send();
}