// header
function header(){
    var search = document.querySelector(".header__find__search")
    var input = document.querySelector(".header__search") 
    var navList = document.querySelector(".header__nav__list")
    var navMenu = document.querySelector(".header__nav__menu")
    navList.classList.add("header__nav__list--focus")
    navMenu.classList.add("header__nav__menu--focus")
    navList.classList.add("header__nav__list--show")
    var checkMenu = document.querySelector(".header__nav__menu")
    var tabletBig = window.matchMedia("(min-width:1101px)")
    var tablet = window.matchMedia("(max-width:1100px)")
// change height 
    input.classList.add("header__search__focus")
    function changeHeight(){
        search.removeEventListener("click",changeHeightTablet)
        input.classList.toggle("header__search__focus");
        navList.classList.remove("header__nav__list--focus")
        navMenu.classList.remove("header__nav__menu--focus")
    };
    if(tabletBig.matches){
        search.addEventListener("click",changeHeight)
    }
// reponsive max-width:1100px
    function changeHeightTablet(){
        search.removeEventListener("click",changeHeight)
        navList.classList.toggle("header__nav__list--focus")
        navMenu.classList.toggle("header__nav__menu--focus")
        input.classList.toggle("header__search__focus")
    }
    function showMenu(){
        navList.classList.add("header__nav__list--focus")
        navList.classList.toggle("header__nav__list--show")
    }
    if(tablet.matches){  
        search.addEventListener("click",changeHeightTablet)
        checkMenu.addEventListener("click",showMenu)
    }
}
header()  
