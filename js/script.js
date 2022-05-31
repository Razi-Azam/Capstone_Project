const mobileNavButton = document.querySelector(".mobile-navbar-btn");

const leftMenu = document.querySelector(".left-menu");

const subMenu = document.querySelector(".sub-menu");

const mainMenu = document.querySelector(".main-menu");

const body = document.body;

//function to add the 
function removeChildNode() {
    const logo = document.querySelector('.logo');
    logo.parentNode.insertBefore(leftMenu, logo);
}


//toggling the menu button in mobile mode
const toggleNavBar = () => {
    mainMenu.classList.toggle("active");
    subMenu.classList.toggle("active");
    subMenu.append(leftMenu);
    leftMenu.classList.toggle("active");

    if(!(subMenu.classList.contains('active'))) {
        removeChildNode();
    }

    leftMenu.childNodes[1].style.paddingBottom = "30px";
    leftMenu.childNodes[1].style.marginLeft = "-10px";
    leftMenu.childNodes[3].style.marginLeft = "-10px";
}

//callig the toggleNavBar function on click event
mobileNavButton.addEventListener("click", () => toggleNavBar());    