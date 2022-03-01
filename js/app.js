/**
 * Define Global Variables
 * 
*/

// here we define the navbar id that we're gonna attach the lists to
const navList = document.getElementById('navbar__list');

// To gather and work on all sections
const sections = document.querySelectorAll('section');




// build the nav

function listingSections() {

// To manipulate each section   
    sections.forEach(function(section) {

// setting ative class for the current section in view
        window.addEventListener('scroll', inView => {
        const rect = section.getBoundingClientRect();
        if (rect.top > -400 && rect.top < 300) {
            section.classList.add("your-active-class"); 
            section.style.cssText = 'background-color: #006666;';
            list.setAttribute('style','background-color:#800080');
        }
        else {section.classList.remove("your-active-class"); 
             section.style.cssText = 'background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);';
             list.setAttribute('style','background-color:#008080');
    }; 
 });

// creating list items and adding their id and value
        let list = document.createElement('li');
        list.innerHTML = `<a id ="${section.id}" href=#"${section.id}" class="menu__link">${section.dataset.nav}</a>`;

// To scroll smoothly after clicking on the desiered section
        list.addEventListener('click', scrl =>{
        scrl.preventDefault();
        setTimeout(function() {
            section.scrollIntoView({behavior: "smooth"}); } , 400);
    });

// Attaching the lists where we need
    navList.appendChild(list);  
    });
    };

// Calling the function
   listingSections();


// Adding an event to UP button
const topy = document.querySelector('#go__up');

    topy.addEventListener('click', () => {
        setTimeout(function() {
        document.body.scrollTop = 0; }, 400)
    }); 

// Conrolling when would the button appear 
    document.addEventListener('scroll', () => {
        if ( document.body.scrollTop <= 2000) {
            topy.style.display = 'none';
        }
        else { topy.style.display = 'block'; 
    }
 });





