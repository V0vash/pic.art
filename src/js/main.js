import popups from './modules/popups';
import sliders from './modules/sliders';
import forms from './modules/forms';
import checkTextInputs from './modules/checkTextInputs';
import mask from './modules/mask';
import addMoreStyles from './modules/addMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';

document.addEventListener('DOMContentLoaded', () => { 
    "use strict";

    popups();
    sliders('.main-slider-item', 'vertical');
    sliders('.feedback-slider-item','', '.main-next-btn', '.main-prev-btn');

    forms();
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    mask('[name="phone"]');

    addMoreStyles('.button-styles', '#styles .row');

    calc('#size', '#material', '#options', '.promocode', '.calc-price');

    filter();

    pictureSize('.sizes-block');

    accordion('.accordion-heading');

    burger('.burger-menu', '.burger');

    scrolling('.pageup');


    
    

});