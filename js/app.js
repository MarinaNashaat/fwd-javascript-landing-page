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

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const section = document.querySelectorAll('section');
const menuLinks = document.getElementsByClassName('menu__link');
const scrolTop = document.getElementById("scrollTop");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// build the nav
document.addEventListener('DOMContentLoaded',()=>{
    for (let i = 0; i < section.length; i++) {
        let listItem = document.createElement('li');
        let linkItem = document.createElement('a');
        let sectionNum = section[i].getAttribute('data-nav');
        let removeSectionSpace = sectionNum.replace(/\s/g, '').toLowerCase();
        linkItem.setAttribute('href', "#" + removeSectionSpace);
        linkItem.setAttribute('class', "menu__link");
        linkItem.innerText = sectionNum;
        listItem.appendChild(linkItem);
        document.getElementById("navbar__list").appendChild(listItem);

    };
    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', navgationClicked);
    }
});

 // Scroll to anchor ID using scrollTO event
function navgationClicked(e) {

    e.preventDefault(); 
    checkActiveClass()
    let href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
   
}

// Add class 'active' to section when near top of viewport
//add active class to active menu link
document.addEventListener('DOMContentLoaded', ()=>{
    window.addEventListener('scroll', function() {
        		
        for (let i = 0; i < section.length; i++) {
            let currentLink=document.querySelector(`[href="#${section[i].id}"]`)
           
            if (section[i].getBoundingClientRect().top >= 0 && section[i].getBoundingClientRect().top < 400 ) {
                checkActiveClass();
                 section[i].classList.add("your-active-class")
                currentLink.classList.add("active")
                
            }
        }
    }); 
});
//check if section and navbar links active
function checkActiveClass(){
    for (let i = 0; i < section.length; i++) {
        let currentLink=document.querySelector(`[href="#${section[i].id}"]`)
        if(section[i].classList.contains("your-active-class")){
            section[i].classList.remove("your-active-class")
        }
        else if(currentLink.classList.contains("active")){
            currentLink.classList.remove("active");
        }
       
    }
}


//scroll to top button
scrolTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
let isScroll=-1;
window.onscroll = () => {
    if(isScroll!==-1){
        document.querySelector(".page__header").style.display ="block"
        clearTimeout(isScroll)
    }
        isScroll=setTimeout(()=>{
            document.querySelector(".page__header").style.display = "none"

        },8000)

    if (window.scrollY > 200) {
        scrolTop.style.display = "flex"
    }
    else {
        scrolTop.style.display = "none"
    }

}
