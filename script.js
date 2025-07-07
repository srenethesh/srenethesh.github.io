// $('.portfolio-button').mousedown(function(){
//     timeout = setInterval(function(){
//         window.scrollBy(0,-1); // May need to be -1 to go down
//     }, 0); // Play around with this number. May go too fast

//     return false;
// });
// Select all section elements and navigation links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

// Function to add the active class to the current section's nav link
const updateActiveLink = () => {
  let index = sections.length;

  // Determine which section is currently visible in the viewport
  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

  // Remove 'active' class from all links
  navLinks.forEach((link) => link.classList.remove("active"));

  // Add 'active' class to the corresponding nav link
  navLinks[index].classList.add("active");
};

// Attach scroll event to update the active link
window.addEventListener("scroll", updateActiveLink);
