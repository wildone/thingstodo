import {MDCList} from '@material/list';
import {MDCDrawer} from "@material/drawer";

import {MDCTopAppBar} from '@material/top-app-bar/index';

import {MDCRipple} from '@material/ripple';


console.log("getting elements");

const drawerElement = document.querySelector('.mdc-drawer');
const drawer = new MDCDrawer.attachTo(drawerElement);

const listElement = document.querySelector('.mdc-drawer .mdc-list');
const list = new MDCList(listElement);

const mainContentElement = document.querySelector('.main-content');

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar.attachTo(topAppBarElement);

console.log(["got elements",
             "drawerElement",drawerElement,
             "drawer",drawer,
             "listElement",listElement,
             "list",list,
             "mainContentEl",mainContentElement,
             "topAppBarElement",topAppBarElement,
             "topAppBar",topAppBar,
             "document.body",document.body             
            ]);

console.log("setting events");

//use main content as target for scrolling
topAppBar.setScrollTarget(mainContentElement);
//navigation item in top bar is clicked
topAppBar.listen('MDCTopAppBar:nav', () => {
  console.log("top bar navigation");
  drawer.open = !drawer.open;
});


//hide modal drawer
listElement.addEventListener('click', (event) => {
  console.log("drawer navigation");
  drawer.open = false;
});

//select first element in page
document.body.addEventListener('MDCDrawer:closed', () => {
  console.log("drawer closed");
  mainContentElement.querySelector('input, button').focus();
});

console.log("finished setting events");


window.onload = function(){
 console.log("window ready");
  
  document.body.addEventListener('MDCTopAppBar:nav', () => {
    console.log("MDCTopAppBar:nav");  
  });

}

//animate elements in cards
const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});