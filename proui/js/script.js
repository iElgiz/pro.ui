function Size() {
    var _height = document.querySelector('.container').offsetHeight;
    var sideBar = document.querySelector('.side-bar');
    sideBar.style.height= _height+"px";
}

// document.getElementById('commerce').addEventListener("click", function(){
//     document.getElementById("commerceopen").style.display="block";
// })

// document.getElementById('down').addEventListener("click" , function(){
//     document.getElementById('down').style.transform = "rotate(-90deg)";
//     document.getElementById("commerceopen").style.display="block";
// })

// document.getElementById('commerce').addEventListener("click" , function(){
//     document.getElementById('down').style.transform = "rotate(-90deg)";
// })



// document.getElementById('dush').addEventListener("click", function(){
//     document.getElementById("commerceopen").style.display="block";
// }) 
document.getElementById('down').style.transform = "rotate(0deg)"
document.getElementById('dush').addEventListener("click" , function(){
    if(document.getElementById('down').style.transform == "rotate(0deg)"){
        document.getElementById('down').style.transform = "rotate(-90deg)";
    document.getElementById('down').style.transition = "all 0.05s linear";
    }
    else{
        document.getElementById('down').style.transform = "rotate(0deg)";
    document.getElementById('down').style.transition = "all 0.05s linear";
    }

})

// document.getElementById('dush').addEventListener("click", function(){
//     if  (document.getElementById("commerceopen").style.display="none") {
//         document.getElementById("commerceopen").style.display="block";

//     }
//     else {
//         document.getElementById("commerceopen").style.display="none";
//     }
// }) 



$( "#dush" ).click(function() {
    $( "#commerceopen" ).slideToggle("fast") 
      // Animation complete.
    
  });