// Select the elements for radius and area output
const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area'); // Corrected querySelector to getElementById

// Define constants and variables
let area = 0;
const PI = 3.14159; // Corrected '==' to '='

// Calculate area for radius 10
let radius = 10; // Changed 'const' to 'let' to allow reassignment
area = PI * radius * radius;
radiusOutput.textContent = radius; // Corrected assignment to update textContent
areaOutput.textContent = area; // Corrected assignment to update textContent

// Calculate area for radius 20
radius = 20; // Reassign radius
area = PI * radius * radius;
radiusOutput.textContent = radius; // Update textContent
areaOutput.textContent = area; // Update textContent