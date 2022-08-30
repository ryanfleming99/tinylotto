/* function addClass() {
    let mainMenu = document.getElementById('menu');
    // removing class
    mainMenu.classList.add('hide');
    console.log('this worked');
    removeClass();
}

function removeClass() {
    let subMenu = document.getElementById('menu-container');
    subMenu.classList.remove('hide');
    console.log("this worked again")
}

function addHide() {
    let subMenu = document.getElementById('menu-container');
    let mainMenu = document.getElementById('menu');
    subMenu.classList.add('hide');
    mainMenu.classList.add('show');
    console.log("they swapped")
} */

function showSubmenu() {
    /* let header = document.getElementById('header'); */
    let subMenu = document.getElementById('menu-container');
    console.log('found header');
    /*  header.classList.add('hide'); */
    console.log('found container')
    subMenu.classList.remove('hide');
}

function removeHide() {
    /* let header = document.getElementById('header'); */
    let subMenu = document.getElementById('menu-container');
    /* header.classList.remove('hide'); */
    subMenu.classList.add('hide');

}


function switchMenu() {
    let menu = document.getElementById('menu-container');
    const menuBox = document.getElementById('titleBox');
    const menuText = document.getElementById('menuText')
    menu.classList.toggle("show");
    menuBox.classList.toggle("lowOpacity");
    menuText.classList.toggle("lowOpacity");

}
/* menuText.innerHTML ? menuText.innerHTML = "close" : menuText.innerHTML = "menu"; */