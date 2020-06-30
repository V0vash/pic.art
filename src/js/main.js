import popups from './modules/popups';
import sliders from './modules/sliders';
import forms from './modules/forms';
import checkTextInputs from './modules/checkTextInputs';
import mask from './modules/mask';
import addMoreStyles from './modules/addMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';

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


    
    

});