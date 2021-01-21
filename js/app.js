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

/* original code as of 1/20 beginning of night
const activeClass = document.querySelectorAll('.menu__link');

activeClass.addEventListener('click', function() {
    activeClass.removeClass('active');
    $(this).addClass('active');
});

/* #2 practice code from feedback 
const activeClass = document.querySelectorAll('.menu__link');

for (const activeClass of activeClasses) {
    activeClass.addEventListener('click', function(event) {
        event.preventDefault();
        activeClass.removeClass('active');
        $(this).addClass('active');
});
} 
*/
var activeClass = document.querySelectorAll('.menu__link');

window.addEventListener('scroll', function (event) {
    activeClass.forEach(element => {
    if (isInViewport(element)) {
        removeActive();
        document.getElementById(`menu_${element.id}`).classList.add("active");
        }    
    });
}, false);


/*

To apply the addEventListener function on the whole list, you have to run a loop and apply the function individually.

Now, about how to active/inactive a section?

Add an event listener on click of each nav-bar menu item
In the callback function,
2.1 Prevent the default behaviour of the click

2.2 Remove the active class from all the sections instead of they have it or not

2.3 Add the active class to the section of which the menu-link has been clicked

2.4 Scroll to the respective section



if (entry && entry.isIntersecting) {
    navListElement.classList.add('active')
    section.classList.add('active')
  } else {
    if (navListElement.classList.contains('active')) {
      navListElement.classList.remove('active')
    }
    if (section.classList.contains('active')) {
      section.classList.remove('active')
    }
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
