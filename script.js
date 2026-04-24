// Task 1 - making sure the script is connected
console.log("Status Manager Started");

// global variable for the timer (need this for task 10)
let intervalId = null;

// grabbing all the elements i need
const mainTitle = document.getElementById("main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.getElementById("status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");

// Task 3 - changing the h1 text using innerHTML
mainTitle.innerHTML = "DOM Project: Ready!";

// Task 4 - adding a data-action attribute to the toggle link
toggleButton.setAttribute("data-action", "status-toggle");

// Task 9 - loop through all the li items and style them
// using querySelectorAll to get a node list then looping with for
function highlightListItems() {
  let items = document.querySelectorAll("li");
  for (let i = 0; i < items.length; i++) {
    items[i].style.color = "blue";
    items[i].style.padding = "6px";
    items[i].style.marginBottom = "4px";
    items[i].style.borderRadius = "4px";
    // alternate backgrounds so the list is easier to read
    if (i % 2 === 0) {
      items[i].style.backgroundColor = "#e8f0fe";
    } else {
      items[i].style.backgroundColor = "#d0e3fc";
      items[i].style.fontWeight = "bold";
    }
  }
}
highlightListItems();

// Task 8 - makes a span with the current time and adds it to the status div
function createTimestamp() {
  let span = document.createElement("span");
  span.innerHTML = new Date().toLocaleTimeString();
  statusOutput.appendChild(span);
}

// Tasks 5/6/7 - handles what happens when you click the toggle button
function toggleStatus(e) {
  // task 6 - stops the page from jumping since its an anchor tag
  e.preventDefault();

  // task 5 - toggle the hidden class to show/hide the status box
  statusOutput.classList.toggle("hidden");

  // task 7 - yellow background when visible, remove it when hidden
  if (!statusOutput.classList.contains("hidden")) {
    mainTitle.style.backgroundColor = "yellow";
    // task 8 - add a timestamp each time status shows up
    createTimestamp();
  } else {
    mainTitle.style.backgroundColor = "";
  }
}

// connect the click event to the toggle function
toggleButton.addEventListener("click", toggleStatus);

// Task 10 - flashing the control panel on and off

function startFlashing() {
  // if its already running dont start another one (prevents double-click bug)
  if (intervalId !== null) {
    return;
  }
  // toggles hidden class every 500ms to make it blink
  intervalId = setInterval(function() {
    controlPanel.classList.toggle("hidden");
  }, 500);
  // change button text so the user knows its running
  timerButton.textContent = "Double-Click to Stop";
}

function stopFlashing() {
  // stops the blinking and makes sure panel is showing
  clearInterval(intervalId);
  intervalId = null;
  controlPanel.classList.remove("hidden");
  // reset button text back to normal
  timerButton.textContent = "Start Timer";
}

// single click starts the flashing, double click stops it
timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);
