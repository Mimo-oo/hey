var acc = document.getElementsByClassName("nop");
var i;
for (i = 0; i < acc.lenght; i++) {
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active")
    })
}

function fun() {
    var nav = document.getElementById("nav");
    if (nav.style.display === "block"){
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    } 

}