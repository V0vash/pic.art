import popups from './modules/popups';
import sliders from './modules/sliders';

document.addEventListener('DOMContentLoaded', () => { 
    "use strict";

    popups();
    sliders('.main-slider-item', 'vertical');
    sliders('.feedback-slider-item','', '.main-next-btn', '.main-prev-btn');
    
    

});