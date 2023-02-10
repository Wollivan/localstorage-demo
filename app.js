// function to set the theme of our website
function setTheme() {
  if (localStorage.getItem("theme") === "light" || localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark");
  }
}

const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", setTheme);

// function to get the current theme of our website
function getTheme() {
  // when you load the page, check the theme, and make sure the colour of the page is correct
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
}
getTheme();

// localStorage.setItem(key, value)
// creates or updates a key: value pair in localStorage

// localStorage.getItem(key)
// retrieves the value of the item with the key passed into the parameter

// localStorage.removeItem(key)
// deletes the value of the item with the key passed into the parameter

// localStorage.clear()
// BOOOOOOM (deletes all of the items)
