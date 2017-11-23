function clickGroup() {
       	var gp = document.getElementById("Group");
        var act = document.getElementById("Activity");
        act.style.display = 'none';
        gp.style.display = 'block';
        document.getElementById("actButton").style.borderBottomWidth = 'thin';
        document.getElementById("groupButton").style.borderBottomWidth = 'thick';
}
function clickActivity() {
    var gp = document.getElementById("Group");
    var act = document.getElementById("Activity");
    gp.style.display = 'none';
    act.style.display = 'block';
    document.getElementById("actButton").style.borderBottomWidth = 'thick';
        document.getElementById("groupButton").style.borderBottomWidth = 'thin';
}
