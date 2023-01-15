function myFunction(number) {
    for (var i = 1; i <= 5; i++) {
      document.getElementById("myDIV_" + i).style.display = "none";
    }
    SubMenu1.style.display = "none";
    var div = document.getElementById("myDIV_" + number);
    if (div.style.display == "block") {
      div.style.display = "none";
    } else {
      div.style.display = "block";
    }
}

function SubMenu(number){
  var div = document.getElementById("SubMenu" + number);
  if (div.style.display == "block") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}