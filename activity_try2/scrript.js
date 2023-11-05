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
function showContent(contentId) {
  const content = document.getElementById(contentId);
  const nextButton = document.getElementById("nextButton");

  // Hide the "Next" and "Back" buttons when showing exercise content
  nextButton.style.display = 'none';
  const backButton = document.getElementById("backButton");
  backButton.style.display = 'none';

  // Hide all content sections first
  const allContent = document.querySelectorAll('.sub-content');
  allContent.forEach(function (contentSection) {
      contentSection.style.display = 'none';
  });

  // Show the clicked content section
  content.style.display = 'block';

  // Show the "Next" button if the exercise with content is clicked
  if (contentId === 'subtopic1') {
      nextButton.style.display = 'block';
  }
}

function showNewContent() {
  const subtopic1 = document.getElementById("subtopic1");
  const newContent = document.getElementById("newContent");
  const backButton = document.getElementById("backButton");

  // Hide the previous content and "Next" button
  subtopic1.style.display = 'none';
  const nextButton = document.getElementById("nextButton");
  nextButton.style.display = 'none';

  // Show the new content and "Back" button
  newContent.style.display = 'block';
  backButton.style.display = 'block';
}

function showFirstContent() {
  const subtopic1 = document.getElementById("subtopic1");
  const newContent = document.getElementById("newContent");
  const backButton = document.getElementById("backButton");

  // Hide the new content and "Back" button
  newContent.style.display = 'none';
  backButton.style.display = 'none';

  // Show the first content and "Next" button
  subtopic1.style.display = 'block';
  const nextButton = document.getElementById("nextButton");
  nextButton.style.display = 'block';
}

function checkUserAnswer() {
  const userAnswerElement = document.getElementById("userAnswer");
  const userAnswer = userAnswerElement.innerText.trim(); // Get the user's input

  const answerSpan = document.createElement("span");
  answerSpan.style.textDecoration = "underline";
  answerSpan.innerText = userAnswer;

  userAnswerElement.innerHTML = ""; // Clear the contenteditable element
  userAnswerElement.appendChild(answerSpan);

  const correctAnswer = "paris"; // Set the correct answer

  if (userAnswer.toLowerCase() === correctAnswer) {
      alert("Correct! Paris is the capital of France.");
  } else {
      alert("Incorrect. Try again.");
  }
}

var isHidden = true;
function showAnswer(answerId, inputId){
  var button = document.getElementById("buttonId");
  var button_1 = document.getElementById("button_Id");
  var answer_id = document.getElementById(answerId);
  var answer = answer_id.getAttribute("ansValue");
  var userAsnwer = document.getElementById(inputId).value;

  if (isHidden === true){
    var inputElement = document.querySelector('input[name="attribute_info"]');
    
   // Set the value of the input element to the correct answer
   inputElement.value = answer;
   button.textContent = 'Hide Answer';
   button_1.setAttribute('disabled', 'true');
   
   // Disable the input to prevent further editing
   inputElement.setAttribute('disabled', 'true');
   isHidden = false;
   } else {
    var inputElement = document.querySelector('input[name="attribute_info"]');
   
   // Set the value of the input element to the correct answer
   inputElement.value = '';
   button.textContent = 'Show Answer';
   button_1.removeAttribute('disabled');
   
   // Disable the input to prevent further editing
   inputElement.removeAttribute('disabled');
   isHidden = true;
   }
}

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
  } else if (userAsnwer.length <= 0){
      alert("You have to fill the blank!");
  } else {
      alert( userAsnwer + " is wrong!");
  }
  }




