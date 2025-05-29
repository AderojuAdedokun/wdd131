// ----- Temple Data Array (9 original + 3 extras) -----
const temples = [
  { templeName: "San Diego California",      location: "San Diego, California, United States", dedicated: "1993, March, 19", area: 17400,  imageUrl: "images/san-diego.jpg" },
  { templeName: "Salt Lake City Utah",       location: "Salt Lake City, Utah, United States", dedicated: "1893, January, 17", area:114000,  imageUrl: "images/salt-lake.jpg" },
  { templeName: "Provo Utah",                location: "Provo, Utah, United States",         dedicated: "1972, March, 5",  area:72400,   imageUrl: "images/provo.jpg" },
  { templeName: "Manila Philippines",        location: "Manila, Philippines",                dedicated: "1984, September, 25", area:21000, imageUrl: "images/manila.jpg" },
  { templeName: "Accra Ghana",               location: "Accra, Ghana",                       dedicated: "2004, December, 19", area:14200, imageUrl: "images/accra.jpg" },
  { templeName: "Johannesburg South Africa", location: "Johannesburg, South Africa",          dedicated: "1985, September, 7",  area:22300, imageUrl: "images/johannesburg.jpg" },
  { templeName: "Aba Nigeria",               location: "Aba, Nigeria",                       dedicated: "2005, August, 7",     area:11500, imageUrl: "images/aba.jpg" },
  { templeName: "Rome Italy",                location: "Rome, Italy",                        dedicated: "2019, March, 10",     area:74200, imageUrl: "images/rome.jpg" },
  { templeName: "Paris France",              location: "Paris, France",                      dedicated: "1988, January, 17",   area:12500, imageUrl: "images/paris.jpg" },
  // three extras:
  { templeName: "Fukuoka Japan",             location: "Fukuoka, Japan",                       dedicated: "1980, October, 27",   area:38200, imageUrl: "images/fukuoka.jpg" },
  { templeName: "Quito Ecuador",             location: "Quito, Ecuador",                     dedicated: "1999, July, 1",       area:10345, imageUrl: "images/quito.jpg" },
  { templeName: "Manti Utah",                location: "Manti, Utah, United States",         dedicated: "1888, May, 21",       area:74792, imageUrl: "images/manti.jpg" }
];

// ----- Render Function -----
function renderTemples(list) {
  const container = document.getElementById("temple-container");
  container.innerHTML = list.map(t => {
    return `
      <article class="temple-card">
        <div class="temple-info">
          <h3>${t.templeName}</h3>
          <p><span class="label">LOCATION:</span>${t.location}</p>
          <p><span class="label">DEDICATED:</span>${t.dedicated}</p>
          <p><span class="label">SIZE:</span>${t.area.toLocaleString()} sq ft</p>
        </div>
        <img
          src="${t.imageUrl}"
          alt="${t.templeName}"
          loading="lazy"
        >
      </article>
    `;
  }).join("");
}

// ----- Filter Logic -----
function filterTemples(criteria) {
  let filtered;
  switch (criteria) {
    case "old":
      filtered = temples.filter(t => {
        const year = +t.dedicated.split(",")[0];
        return year < 1900;
      });
      break;
    case "new":
      filtered = temples.filter(t => {
        const year = +t.dedicated.split(",")[0];
        return year > 2000;
      });
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }
  renderTemples(filtered);

  // Update section title
  const titleEl = document.getElementById("section-title");
  titleEl.textContent = criteria === "all"
    ? "Home"
    : criteria.charAt(0).toUpperCase() + criteria.slice(1);
}

// ----- Init: DOMContentLoaded -----
document.addEventListener("DOMContentLoaded", function() {
  // Initial render (all)
  renderTemples(temples);

  // Hook up filter buttons
  const buttons = document.querySelectorAll(".navigation button");
  buttons.forEach(btn => {
    btn.addEventListener("click", function() {
      buttons.forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      filterTemples(this.dataset.filter);
    });
  });

  // Hamburger menu toggle
  const menuBtn = document.getElementById("menu");
  const navEl = document.querySelector("nav");
  menuBtn.addEventListener("click", function() {
    navEl.classList.toggle("open");
    menuBtn.classList.toggle("open");
  });

  // Footer dates
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModification").textContent =
    "Last Modification: " + document.lastModified;
});