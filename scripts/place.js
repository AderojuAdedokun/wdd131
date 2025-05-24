// Footer: Year and Last Modified
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;

  // Weather: Wind Chill Calculation
  const temp = parseFloat(document.getElementById("temp").textContent);
  const wind = parseFloat(document.getElementById("wind").textContent);
  const windchillSpan = document.getElementById("windchill");

  function calculateWindChill(t, v) {
    // Wind chill formula for Celsius
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
  }

  // Only show wind chill if temp <= 10°C and wind > 4.8 km/h
  if (temp <= 10 && wind > 4.8) {
    windchillSpan.textContent = calculateWindChill(temp, wind);
  } else {
    windchillSpan.textContent = "N/A";
  }
});