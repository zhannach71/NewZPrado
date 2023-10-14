
const draggables = document.querySelectorAll(".draggable");
const dropzone = document.querySelector(".dropzone");

// For each draggable item, set data for drop zone (draggable element ID) and add "dragging-active" class
for (const draggable of draggables) {
  draggable.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
    draggable.classList.add("dragging-active");
  });

  // Remove "dragging-active" class when dragging ends
  draggable.addEventListener("dragend", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
    draggable.classList.remove("dragging-active");
  });
}

// Allow drop (drop not allowed by default)
dropzone.addEventListener("dragover", (event) => {
  event.preventDefault();
});

// Append current draggable element to dropzone
dropzone.addEventListener("drop", (event) => {
  event.preventDefault();
  const draggableId = event.dataTransfer.getData("text/plain");
  const element = document.getElementById(draggableId);

  // Check if dropzone has only one child element and if it is the placeholder element
  // If TRUE, use replaceChild() to the replace the placeholder with a draggable element
  // If FALSE, use appendChild() to add the draggable element to the dropzone
  if (
    dropzone.children.length === 1 &&
    dropzone.children[0].classList.contains("dropzone-placeholder")
  ) {
    dropzone.replaceChild(element, dropzone.children[0]);
  } else {
    dropzone.appendChild(element);
  }
});

// Add a click event listener to all elements with class "myButton"
$('.myButton').on('click', function() {
    // When clicked, set the text of the element with ID "myDiv" to "Button clicked!"
    $('#myDiv').text('Button clicked!');
  });
  
  // Add a mouseover event listener to the element with ID "myDiv"
  $('#myDiv').on('mouseover', function() {
    // When the mouse enters the element, set its background color to purple
    $(this).css('background-color', '#C9A7EB');
  });
  
  // Add a mouseout event listener to the element with ID "myDiv"
  $('#myDiv').on('mouseout', function() {
    // When the mouse leaves the element, set its background color to pink
    $(this).css('background-color', '#ECC9EE');
  });