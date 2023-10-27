const infoText = [
  "My nickname is u20291022",
  "I'm 18 y.o. fullstack from Russia",
  "You can see my skills on my github page",
  "🌸 Be kind 🌸"
];

const infoTextElement = document.getElementById("info-text");
const skipButtonElement = document.getElementById("skip-button");
const mainElement = document.getElementById("main");

let skipAnimation = false;
let opacityDirection = true; // false is to 0, true is to 1
let infoTextIndex = 0;

const getOpacityTargetValue = (opacityDirection) => opacityDirection ? "1" : "0"
const setNextInfoText = () => {
  infoTextElement.textContent = infoText[infoTextIndex++];
}
const hideInfoTextAndSkipButtonElements = () => {
  infoTextElement.style.display = skipButtonElement.style.display = "none";
}
const displayMainSectionElement = () => {
  mainElement.style.visibility = "visible";
  mainElement.style.opacity = "1";
}

skipButtonElement.addEventListener("click", () => {
  if (skipAnimation) {
    hideInfoTextAndSkipButtonElements();
    displayMainSectionElement();
  }

  skipAnimation = true;
  
  skipButtonElement.textContent = "click again to force skip"
  infoTextElement.style.transition = "0.5s" // change animation speed
})

const infoTextAnimationInterval = setInterval(() => {
  if (infoTextIndex > infoText.length) {
    hideInfoTextAndSkipButtonElements();
    displayMainSectionElement();

    return clearInterval(infoTextAnimationInterval);
  }

  const infoTextStyles = window.getComputedStyle(infoTextElement);
  const infoTextOpacity = infoTextStyles.getPropertyValue("opacity");
  const opacityTargetValue = getOpacityTargetValue(opacityDirection);

  // if we end current animation
  if (infoTextOpacity === opacityTargetValue) {
    infoTextElement.style.opacity = getOpacityTargetValue(!opacityDirection);

    // change info text, when user dont see text
    if (infoTextOpacity === "0") {
      setNextInfoText();
    }

    opacityDirection = !opacityDirection; // 0 -> 1 | 1 -> 0
  }
})