function activateDuet(){
    document.getElementById("student_2").style.display = "block";
    document.getElementById("first_name_2").setAttribute('required', '');
    document.getElementById("last_name_2").setAttribute('required', '');
    document.getElementById("skill_2").setAttribute('required', '');
    document.getElementById("instrument_2").setAttribute('required', '');
}

function deactivateDuet(){
    document.getElementById("student_2").style.display = "none";
    document.getElementById("first_name_2").removeAttribute('required', '');
    document.getElementById("last_name_2").removeAttribute('required', '');
    document.getElementById("skill_2").removeAttribute('required', '');
    document.getElementById("instrument_2").removeAttribute('required', '');
}

function performanceChange(){
    let value = document.getElementById("performance").value;
    if (value == "Duet") activateDuet();
    else deactivateDuet();
}
