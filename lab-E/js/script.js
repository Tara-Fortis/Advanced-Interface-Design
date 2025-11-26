// STEP 1: Get the SVG and its viewBox width
let svg = document.querySelector("svg");
let viewBox = svg.getAttribute("viewBox").split(" ");
let viewBoxWidth = parseInt(viewBox[2], 10); // index 2 = width

// STEP 2: Capture the % value from the text element
let percent = document.querySelector("svg text").textContent;
percent = percent.replace("%", "");
percent = parseInt(percent, 10) / 100; // convert to decimal

// STEP 3: Calculate the rectangle width as a fraction of the viewBox width
let rectWidth = percent * viewBoxWidth;

// STEP 4: Update the rectangle's width attribute
let rect = document.querySelector("#rectangle");
rect.setAttribute("width", rectWidth);
