import popups from './modules/popups';
import sliders from './modules/sliders';
import forms from './modules/forms';
import checkTextInputs from './modules/checkTextInputs';
import mask from './modules/mask';

document.addEventListener('DOMContentLoaded', () => { 
    "use strict";

    popups();
    sliders('.main-slider-item', 'vertical');
    sliders('.feedback-slider-item','', '.main-next-btn', '.main-prev-btn');

    forms();
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    mask('[name="phone"]');
    
    

});