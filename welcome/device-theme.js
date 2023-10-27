const changeCSSVariable = document.documentElement.style.setProperty;

const setTheme = (isDarkTheme) => {
  if (isDarkTheme) {
    document.documentElement.style.setProperty("--main-color", "black");
    document.documentElement.style.setProperty("--accent-color", "white");
  }
  else {
    document.documentElement.style.setProperty("--main-color", "white");
    document.documentElement.style.setProperty("--accent-color", "black");
  }
}

// check device theme
setInterval(() => {
  const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

  setTheme(isDarkTheme);
}, 500)