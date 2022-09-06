function activeMenu() {
  const element = document.getElementById("menu-options");
  if (element.className == "off") {
    element.className = "newStyle";
  } else {
    element.className = "myStyle";
  }
}