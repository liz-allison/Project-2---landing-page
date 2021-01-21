/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/*Define Global Variables*/

const navSections = document.querySelectorAll('section')
const navBar = document.getElementById('navbar__list')


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
navSections.forEach(i => {
    const navlistElement = `<li class='menu__link ${i.className}' data-link=${i.id}><a href="#${i.id}">${i.dataset.nav}</li>`
    navBar.insertAdjacentHTML('beforeend', navlistElement)
  })

// Add class 'active' to section when near top of viewport

/* #2 practice code from feedback */
const activeClass = document.querySelectorAll('.menu__link');

for (const activeClass of activeClasses) {
    activeClass.addEventListener('click', function(event) {
        event.preventDefault();
        activeClass.removeClass('active');
        $(this).addClass('active');
});
} 

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
