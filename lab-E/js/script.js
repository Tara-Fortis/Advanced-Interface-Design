// Calculate bar width
let svg = document.querySelector("svg");
console.log(svg);

// split the viewBox value into an array
let viewBox = svg.getAttribute("viewBox").split(" ");
console.log(viewBox);

// [0, 0, 500, 500] get the third value or viewBox[2]
viewBox = viewBox[2];

// convert viewBox into an interger
viewBox = parseInt(viewBox, 10);
console.log(viewBox);

// get the text from <text> and remove the %
let percent = document.querySelector("svg text").textContent;
percent = percent.replaceAll("%", "");
percent = parseInt(percent, 10);
console.log(percent);

// get the external CSS
const cssRulesList = document.styleSheets[0].cssRules;
console.log(cssRulesList);
let svgActiveRule;

for (let i = 0; i < cssRulesList.length; i++) {
    if (cssRulesList[i].selectorText === "svg:active #rectangle") {
        svgActiveRule = cssRulesList[i];
    }
}
console.log(svgActiveRule);

percent = `${percent}%`;
svgActiveRule.style.setProperty("width", percent);
