/*
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

//Define Global Variables

const navSections = document.querySelectorAll('section');
const navBar = document.getElementById('navbar__list');


//End Global Variables

//Begin Main Functions


// build the nav
navSections.forEach(i => {
    const navlistElement = `<li class='menu__link ${i.className}' data-link=${i.id}><a href="#${i.id}">${i.dataset.nav}</li>`
    navBar.insertAdjacentHTML('beforeend', navlistElement)
})

/*event listener added here*/
  document.addEventListener('scroll', function() {
    activeSection();
  })
  document.addEventListener('click',function(){
    activeSection();
  })

//While scrolling through the page, section in viewport highlights same section in navbar
let activeSection = () => {
    for (let i =0; i < navSections.length; i++) {
        const section = navSections[i];
        const links = document.querySelectorAll('li');
        const selectedLink = links[i];
        const view = section.getBoundingClientRect();
        if (view.top <=150 && view.bottom >= 150) {
            section.classList.add("your-active-class");
            selectedLink.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
            selectedLink.classList.remove("your-active-class");   
        }
    }
  }

// Scroll to anchor ID using scrollTO event
navBar.addEventListener('click', e => {
    e.preventDefault();
    const parent = e.target.hasAttribute('data-link') ? e.target : e.target.parentElement;
    const elementToScrollTo = document.getElementById(parent.dataset.link);
    elementToScrollTo.scrollIntoView({block: 'end', behavior: 'smooth'});
});

//section as active when the user scrolls to it.
document.addEventListener('scroll', function scrolling() {
  navSections.forEach((section) => {
    if (isInViewport(section)) {
      navBar.classList.add('active');
    } else {
      navBar.classList.remove('active');
    }
  });
});


//End Main Functions
