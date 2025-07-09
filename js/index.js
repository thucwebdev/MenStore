
accounts = JSON.parse(localStorage.accounts);
let foundUser = accounts.find((value) => {
    return value.islogIn === true;
  });

  showuser =document.getElementById("used")
  if(foundUser) showuser.innerText = foundUser.account;

let status_menu = true;
let status_listIntro = true;
let status_listPolicy = true;
let status_listNew = true;
let status_listIntroHeader = true;
let status_listProduct = true;
let status_listAdam360 = true;
let status_listAdamcorner
function OnclickMenu() {
  const listMenu = document.getElementById("listMenu");

  if (status_menu) status_menu = false;
  else status_menu = true;
  if (status_menu) {
    listMenu.style.display = "none";
  } else {
    listMenu.style.display = "block";
  }
}
function OnclickPlusIntroHeader() {
  const listMenu = document.getElementById("list-intro-header");
  const buttonid = document.getElementById("plus-intro-header");
  if (status_listIntroHeader) status_listIntroHeader = false;
  else status_listIntroHeader = true;
  if (status_listIntroHeader) {
    listMenu.style.display = "none";
    buttonid.innerText = "+";
  } else {
    listMenu.style.display = "block";
    buttonid.innerText = "-";
  }
}
function OnclickPlusIntro() {
  const listMenu = document.getElementById("list-menu-intro");
  const buttonid = document.getElementById("plus-intro");
  if (status_listIntro) status_listIntro = false;
  else status_listIntro = true;
  if (status_listIntro) {
    listMenu.style.display = "none";
    buttonid.innerText = "+";
  } else {
    listMenu.style.display = "block";
    buttonid.innerText = "-";
  }
}

function OnclickPlusPolicy() {
  const listMenu = document.getElementById("list-policy");
  const buttonid = document.getElementById("plus-policy");
  if (status_listPolicy) status_listPolicy = false;
  else status_listPolicy = true;
  if (status_listPolicy) {
    listMenu.style.display = "none";
    buttonid.innerText = "+";
  } else {
    listMenu.style.display = "block";
    buttonid.innerText = "-";
  }
}

function OnclickPlusNew() {
  const listMenu = document.getElementById("list-new");
  const buttonid = document.getElementById("plus-new");
  if (status_listNew) status_listNew = false;
  else status_listNew = true;
  if (status_listNew) {
    listMenu.style.display = "none";
    buttonid.innerText = "+";
  } else {
    listMenu.style.display = "block";
    buttonid.innerText = "-";
  }
}
function OnclickPlusProductHeader() {
  const listMenu = document.getElementById("list-product-header");
  const buttonid = document.getElementById("plus-product-header");
  if (status_listProduct) status_listProduct = false;
  else status_listProduct = true;
  if (status_listProduct) {
    listMenu.style.display = "none";
    buttonid.innerText = "+";
  } else {
    listMenu.style.display = "block";
    buttonid.innerText = "-";
  }
}
function OnclickPlusAdam360() {
  const listMenu = document.getElementById("list-adam360-header");
  const buttonid = document.getElementById("plus-adam360");
  if (status_listAdam360) status_listAdam360 = false;
  else status_listAdam360 = true;
  if (status_listAdam360) {
    listMenu.style.display = "none";
    buttonid.innerText = "+";
  } else {
    listMenu.style.display = "block";
    buttonid.innerText = "-";
  }
}

function OnclickPlusAdamCorner() {
  const listMenu = document.getElementById("list-adamcorner");
  const buttonid = document.getElementById("plus-adamcorner");
  if (status_listAdamcorner) status_listAdamcorner = false;
  else status_listAdamcorner = true;
  if (status_listAdamcorner) {
    listMenu.style.display = "none";
    buttonid.innerText = "+";
  } else {
    listMenu.style.display = "block";
    buttonid.innerText = "-";
  }
}

function TogglePlus(listMenu, buttonid,statButton) {
  listMenu = document.getElementById("list-adam360-header");
  buttonid = document.getElementById("plus-adam360");
  if (statButton) statButton = false;
  else statButton = true;
  if (statButton) {
    listMenu.style.display = "none";
    buttonid.innerText = "+";
  } else {
    listMenu.style.display = "block";
    buttonid.innerText = "-";
  }
}

