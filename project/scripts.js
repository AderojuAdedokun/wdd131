document.addEventListener("DOMContentLoaded", () => {
  // Set current year and last modification in footer
  const yearSpan = document.getElementById('currentyear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  const lastMod = document.getElementById('lastModification');
  if (lastMod) {
    lastMod.textContent = "Last Modification: " + document.lastModified;
  }

  // Booking form confirmation (for services.html)
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const service = bookingForm.service.value;
      const date = bookingForm.date.value;
      const name = bookingForm.name.value;
      // Save booking to localStorage
      let bookings = JSON.parse(localStorage.getItem('bookings') || "[]");
      bookings.push({service, date, name});
      localStorage.setItem('bookings', JSON.stringify(bookings));
      // Show confirmation
      document.getElementById('bookingConfirmation').innerHTML =
        `<p>Thank you, ${name}! Your ${service} appointment for ${date} is booked.</p>`;
      bookingForm.reset();
    });
  }
});