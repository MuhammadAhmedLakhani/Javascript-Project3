

// Get the parent element
const container = document.querySelector('#container');

// Add a single click listener to the parent
container.addEventListener('click', (event) => {
  // event.target refers to the specific element that was clicked
  const clickedElement = event.target;

  // Check if the clicked element has your specific class
  if (clickedElement.classList.contains('clickable-box')) {
    // Now you can retrieve and use its unique ID
    const elementId = clickedElement.id;
    console.log(`The ID of the clicked element is: ${elementId}`);

    // You can now use this ID for further processing
    // For example, change its text or style
    clickedElement.textContent = `You clicked element with ID: ${elementId}`;
  }
});
