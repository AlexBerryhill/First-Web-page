function loadPHP() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let files = JSON.parse(this.responseText);
            let table = "<table><tr><th>FileName</th><th>FileType</th><th>FilePath</th></tr>"
            for (let i=0;i<files.length;i++){
                table += "<tr><td>"+files[i].fileName+"</td>"
                table += "<td>"+files[i].fileType+"</td>"
                table += "<td>"+files[i].cwd+"</td></tr>"
            }
            table += "</table>"
            document.getElementById("demo").innerHTML =table
        }
        else if(this.status == 404){
            document.getElementById("demo").innerHTML ="404 File not found";
        }
    };
    xhttp.open("GET", "./assign10.php",true);
    xhttp.send();
}
loadPHP();
