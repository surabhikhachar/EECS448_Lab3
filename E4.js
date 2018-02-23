function change()
{
    let rBK = parseInt(document.getElementById("rBK").value);
    let gBK = parseInt(document.getElementById("gBK").value);
    let bBK = parseInt(document.getElementById("bBK").value);
    let rBD = parseInt(document.getElementById("rBD").value);
    let gBD = parseInt(document.getElementById("gBD").value);
    let bBD = parseInt(document.getElementById("bBD").value);
    let wBD = parseInt(document.getElementById("wBD").value);
    if(isNaN(rBK) || isNaN(gBK) || isNaN(bBK) || isNaN(rBD) || isNaN(gBD) || isNaN(bBD) || isNaN(wBD)) {
      alert("Input values must be integers, please try again!")
    }
    else if(rBK < 0 || rBK > 255) {
        alert("Red background value is invalid! Please enter an integer between 0-255!");
    }
    else if(gBK < 0 || gBK > 255) {
        alert("Green background value is invalid! Please enter an integer between 0-255!");
    }
    else if(bBK < 0 || bBK > 255) {
        alert("Blue background value is invalid! Please enter an integer between 0-255!");
    }
    else if(rBD < 0 || rBD > 255) {
        alert("Red border value is invalid! Please enter an integer between 0-255!");
    }
    else if(gBD < 0 || gBD > 255) {
        alert("Green border value is invalid! Please enter an integer between 0-255!");
    }
    else if(bBD < 0 || bBD > 255) {
        alert("Blue border value is invalid! Please enter an integer between 0-255!");
    }
    else if(wBD < 0) {
        alert("Width border value is invalid! Please enter an integer between 0-255!");
    }
    else {
        let p = document.getElementById("randomText");
        p.style.backgroundColor = "rgb(" + rBK + ", " + gBK + ", " + bBK + ")";
        p.style.borderColor = "rgb(" + rBD + ", " + gBD + ", " + bBD + ")";
        p.style.borderWidth = wBD;
    }
}
