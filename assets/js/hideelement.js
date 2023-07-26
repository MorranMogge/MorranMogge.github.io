function myFunction(index) {
    var myVar = "myDIV" + index.toString();
    var x = document.getElementById(myVar);
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }