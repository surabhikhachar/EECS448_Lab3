function validateMe()
{
  let x = document.getElementsByClassName("pw")
  if (x[0].value === x[1].value)
  {
    if (x[0].value.length >=8){
      alert("Good work! Your passwords are VALID!")
    }
    else {
      alert("Try counting again, those passwords aren't long enough!")
    }
  }
  else{
    alert ("Those are not the same password, try again!")
  }
}
