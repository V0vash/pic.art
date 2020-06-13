
function showPopupByTime(popupSelector, time){
    const popup = document.querySelector(popupSelector);

    setTimeout(()=>{
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    },time);
}

function popups(){
function bindPopup(triggerSelector, popupSelector, popupCloseSelector, closeClickOverlay = true){
    const trigger = document.querySelectorAll(triggerSelector),
      popup = document.querySelector(popupSelector),
      popupClose = document.querySelector(`${popupSelector} ${popupCloseSelector}`),
      windows = document.querySelectorAll('[data-popup]'),
      scroll = calcScroll();

     //open
    trigger.forEach((item) => {
        item.addEventListener('click',(e) => {
            if(e.target) {
            e.preventDefault();
            }

            windows.forEach(item =>{
                item.style.display = 'none';
            });

            popup.style.display = 'block';
            document.body.style.marginRight = `${scroll}px`;
        });
    });

    
    //close 
    popup.addEventListener('click', (e) => {
        if (e.target === popup && closeClickOverlay){
            windows.forEach(item =>{
                item.style.display = 'none';
            });
            popup.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    });
    //x -close
    popupClose.addEventListener('click', () =>{
        windows.forEach(item =>{
            item.style.display = 'none';
        });
        popup.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
    });
}

function calcScroll(){
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

bindPopup('.button-design', '.popup-design', '.popup-close');
bindPopup('.button-consultation', '.popup-consultation', '.popup-close');


}

export default popups;
export {showPopupByTime};