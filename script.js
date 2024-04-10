// Declaring the Variabels

const userInput = document.getElementById("user-input");
const results = document.getElementById("results-div");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");

//appearing of the alert

checkButton.addEventListener("click", () => {
  const userInputValue = userInput.value;
  if (userInputValue === "") {
    alert("Please provide a phone number");
    return;
  }

  // Declaring the Regex

  const usNumberRegex =
    /(?:^|\s)^1?\s?(\d{3}|(\(\d{3}\)))\-?\s?\d{3}\-?\s?\d{4}(?:$|\s)/g;
  //console.log(usNumberRegex.test(userInputValue))
  if (usNumberRegex.test(userInputValue)) {
    const validParagraph = document.createElement("p");
    validParagraph.style.color = "#00471b";
    validParagraph.style.fontSize = "1.2rem";
    validParagraph.style.margin = "10px 0px";
    validParagraph.style.padding = "5px";
    validParagraph.style.textAlign = "center";
    validParagraph.textContent = `Valid US number: ${userInputValue}`;
    results.appendChild(validParagraph);
    userInput.value = "";
  } else {
    const invalidParagraph = document.createElement("p");
    invalidParagraph.style.color = "#4d3800";
    invalidParagraph.style.fontSize = "1.2rem";
    invalidParagraph.style.margin = "10px 0px";
    invalidParagraph.style.padding = "5px";
    invalidParagraph.style.textAlign = "center";
    invalidParagraph.textContent = `Invalid US number: ${userInputValue}`;
    results.appendChild(invalidParagraph);
    userInput.value = "";
  }
});

// Removing the content of the results-container
clearButton.addEventListener("click", () => {
  results.innerHTML = "";
  return;
});
