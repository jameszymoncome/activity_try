/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function toggleSubMenu(submenu) {
  submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}

function showContent(contentId) {
  const content = document.getElementById(contentId);
  // Hide all content sections
  const allContent = document.querySelectorAll('.sub-content');
  allContent.forEach(function(contentSection) {
      contentSection.style.display = 'none';
  });
  // Show the clicked content section
  content.style.display = 'block';
}

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});

}

// Initially hide all "Next" buttons
const allButtons = document.querySelectorAll('.nextButton');
allButtons.forEach(function (button) {
    button.style.display = 'none';
});

function showNewContent(currentContentId, newContentId, nextButtonId) {
  const currentContent = document.getElementById(currentContentId);
  const newContent = document.getElementById(newContentId);

  // Hide the current content
  currentContent.style.display = 'none';

  // Show the new content
  newContent.style.display = 'block';

  // Hide the current "Next" button
  const currentNextButton = document.getElementById(nextButtonId);
  currentNextButton.style.display = 'none';
}

function showOriginalContent(currentContentId, newContentId, nextButtonId) {
  const currentContent = document.getElementById(currentContentId);
  const newContent = document.getElementById(newContentId);

  // Hide the new content
  newContent.style.display = 'none';

  // Show the current content
  currentContent.style.display = 'block';

  // Show the "Next" button
  const currentNextButton = document.getElementById(nextButtonId);
  currentNextButton.style.display = 'block';
}

var isHidden = true;
function showAnswer(answerId, inputId, buttonId1, buttonId2){
  var button = document.getElementById(buttonId1);
  var button_1 = document.getElementById(buttonId2);
  var answer_id = document.getElementById(answerId);
  var answer = answer_id.getAttribute("ansValue");

  if (isHidden === true){
    var inputElement = document.getElementById(inputId);
    
   // Set the value of the input element to the correct answer
   inputElement.value = answer;
   button.textContent = 'Hide Answer';
   button_1.setAttribute('disabled', 'true');
   
   // Disable the input to prevent further editing
   inputElement.setAttribute('disabled', 'true');
   isHidden = false;
   } else {
    var inputElement = document.getElementById(inputId);
   
   // Set the value of the input element to the correct answer
   inputElement.value = '';
   button.textContent = 'Show Answer';
   button_1.removeAttribute('disabled');
   
   // Disable the input to prevent further editing
   inputElement.removeAttribute('disabled');
   isHidden = true;
   }
}

const exercisesId_array= [];
function checkAnswer(questionId, inputId){
// Get specific question by ID
var thisQuestionId = document.getElementById(questionId);
// Get answer value of the specific question
var ans = thisQuestionId.getAttribute("ansValue");
// Get user input value
var userAsnwer = document.getElementById(inputId).value;
// Checks if user input is same with set correct answer
if (ans === userAsnwer){
    alert( userAsnwer + " is correct!");
    if (!(exercisesId_array.includes(questionId))){
      progress(questionId);
    }
} else if (userAsnwer.length <= 0){
    alert("You have to fill the blank!");
} else {
    alert( userAsnwer + " is wrong!");
}
}

var completed_exercises = 0;
function progress(exercisesId){
  progressBar = document.getElementById("progressId");
  completed_exercises++;
  progressBar.textContent = "Finished exercises: " + completed_exercises.toString() + "/110";
  exercisesId_array.push(exercisesId);
}

