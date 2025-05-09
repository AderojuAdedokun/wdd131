// Wait for the document to be fully loaded
window.addEventListener("DOMContentLoaded", function () {
    // Get the current year
    const year = new Date().getFullYear();
  
    // Insert the year into the span with id 'currentyear'
    document.getElementById("currentyear").textContent = year;
  
    // Get the last modified date of the document
    const lastModifiedDate = document.lastModified;
  
    // Insert the last modified date into the paragraph with id 'lastModified'
    document.getElementById("lastModification").textContent = `Last Modification: ${lastModifiedDate}`;
});