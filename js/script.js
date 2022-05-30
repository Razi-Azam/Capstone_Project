const mobileNavButton = document.querySelector(".mobile-navbar-btn");

const leftMenu = document.querySelector(".left-menu");

const subMenu = document.querySelector(".sub-menu");

const mainMenu = document.querySelector(".main-menu");

const body = document.body;

//style for leftMenu for mobile
const leftMenuStyle={
    fontSize: "12px",
    fontWeight: "bold",
    font: "normal normal bold 12px/14px Proxima Nova",
    padding: "100px 0px 84px 0px"
}

const headerStyle = {
    width: "100%",
    height: "100%",
    top: 0,
    // left:0,
    overflow: "hidden",
    position: "fixed"
}

const subMenuStyle = {
    width: "100%",
    height: "100%",
    // left:0,
    overflow: "scroll",
    position: "fixed",
    padding: "380px 0px 84px 43px"
}

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

    body.style.overflow = "hidden";
    body.style.position = "fixed";

    Object.assign(mainMenu.style, headerStyle);
    Object.assign(subMenu.style, subMenuStyle);



    if(!(subMenu.classList.contains('active'))) {
        delete leftMenuStyle.padding;
        removeChildNode();
        document.location.reload();
    }

    Object.assign(leftMenu.style, leftMenuStyle);

    leftMenu.childNodes[1].style.paddingBottom = "30px";
    leftMenu.childNodes[1].style.marginLeft = "-10px";
    leftMenu.childNodes[3].style.marginLeft = "-10px";
}

//callig the toggleNavBar function on click event
mobileNavButton.addEventListener("click", () => toggleNavBar());    