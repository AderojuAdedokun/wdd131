// filepath: c:\Users\ROJU\OneDrive\Desktop\wdd131\week02\scripts\bom.js

// Select the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add event listener to the Add Chapter button
button.addEventListener('click', () => {
  // Check if the input is not empty
  if (input.value.trim() !== '') {
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = input.value;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    // Append the delete button to the list item
    li.append(deleteButton);

    // Append the list item to the unordered list
    list.append(li);

    // Clear the input field
    input.value = '';

    // Add event listener to the delete button
    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
      input.focus(); // Return focus to the input field
    });
  } else {
    // Alert the user and return focus to the input field
    alert('Please enter a chapter name.');
  }

  // Ensure the input field is focused after any action
  input.focus();
});