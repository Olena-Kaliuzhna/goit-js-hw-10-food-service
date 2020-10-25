  
import menu from '../menu.json';
import itemsTemplate from '../templates/menu-items.hbs';


const menuList = document.querySelector('.js-menu');

const markup = itemsTemplate(menu);
menuList.insertAdjacentHTML('beforeend', markup);
