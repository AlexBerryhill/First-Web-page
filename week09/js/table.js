function populateTable(filename){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(xhttp.responseText)
        }
    };
    xhttp.open("GET", filename, true);
    xhttp.send();
}

var el_up = document.getElementById("GFG_UP");
         
var list = [
    {"col_1":"val_11", "col_2":"val_12"},
    {"col_1":"val_21", "col_2":"val_22"},
    {"col_1":"val_31", "col_2":"val_32"}
];
    
el_up.innerHTML = "Click on the button to create the "
        + "table from the JSON data.<br><br>"
        + JSON.stringify(list[0]) + "<br>"
        + JSON.stringify(list[1]) + "<br>"
        + JSON.stringify(list[2]);  
    
function GFG_FUN() {
    var cols = [];
        
    for (var i = 0; i < list.length; i++) {
        for (var k in list[i]) {
            if (cols.indexOf(k) === -1) {
                    
                // Push all keys to the array
                cols.push(k);
            }
        }
    }
        
    // Create a table element
    var table = document.createElement("table");
        
    // Create table row tr element of a table
    var tr = table.insertRow(-1);
        
    for (var i = 0; i < cols.length; i++) {
            
        // Create the table header th element
        var theader = document.createElement("th");
        theader.innerHTML = cols[i];
            
        // Append columnName to the table row
        tr.appendChild(theader);
    }
        
    // Adding the data to the table
    for (var i = 0; i < list.length; i++) {
            
        // Create a new row
        trow = table.insertRow(-1);
        for (var j = 0; j < cols.length; j++) {
            var cell = trow.insertCell(-1);
                
            // Inserting the cell at particular place
            cell.innerHTML = list[i][cols[j]];
        }
    }
        
    // Add the newly created table containing json data
    var el = document.getElementById("table");
    el.innerHTML = "";
    el.appendChild(table);
}   