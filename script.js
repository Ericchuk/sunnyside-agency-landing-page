let hamburger = document.querySelector(".hamburger");
let hamburgerContent = document.querySelector(".hamburger-content");
console.log(hamburger,hamburgerContent);

function openHamburger(){
    if(hamburgerContent.style.visibility ==="visible"){
        hamburgerContent.style.visibility ="hidden";
    }else(
        hamburgerContent.style.visibility = "visible"
    )
}

hamburger.addEventListener("click", openHamburger);