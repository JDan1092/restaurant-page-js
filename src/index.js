import { initialPageLoad } from "./initial-page-load";
import { menu } from "./menu";
import { contact } from "./contact";
import './style.css';

initialPageLoad();

let tabSwitchingModule = (function() {
    
    const homeTab = document.querySelector(".home");
    homeTab.addEventListener("click", initialPageLoad);

    const menuTab = document.querySelector(".menu");
    menuTab.addEventListener("click",  menu);

    const contactTab = document.querySelector(".contact");
    contactTab.addEventListener("click", contact);

})();