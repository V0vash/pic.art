import popups from './modules/popups';
import sliders from './modules/sliders';
import forms from './modules/forms';

document.addEventListener('DOMContentLoaded', () => { 
    "use strict";

    popups();
    sliders('.main-slider-item', 'vertical');
    sliders('.feedback-slider-item','', '.main-next-btn', '.main-prev-btn');
    
    forms();

});