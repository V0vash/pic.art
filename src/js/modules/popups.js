
const popups = () =>{
    let btnPressed = false;
function bindPopup(triggerSelector, popupSelector, popupCloseSelector, destroyTrigger = false){
    const trigger = document.querySelectorAll(triggerSelector),
      popup = document.querySelector(popupSelector),
      popupClose = document.querySelector(`${popupSelector} ${popupCloseSelector}`),
      windows = document.querySelectorAll('[data-modal]'),
      scroll = calcScroll();

    trigger.forEach((item) => {
        item.addEventListener('click',(e) => {
            if(e.target) {
            e.preventDefault();
            }

            btnPressed = true;

            if(destroyTrigger){
                item.remove();
            }

            windows.forEach(item =>{
                item.style.display = 'none';
                item.classList.add('animated', 'fadeIn');
            });

            popup.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        });
    });

    
    popup.addEventListener('click', (e) => {
        if (e.target === popup){
            windows.forEach(item =>{
                item.style.display = 'none';
            });
            popup.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    });

    popupClose.addEventListener('click', () =>{
        windows.forEach(item =>{
            item.style.display = 'none';
        });
        popup.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
    });
}

function showPopupByTime(popupSelector, time){
    const popup = document.querySelector(popupSelector);

    setTimeout(()=>{
        let display;

        document.querySelectorAll('[data-modal]').forEach(item =>{
            if(getComputedStyle(item).display !== 'none'){
                display = 'true';
            }
        });

        if(!display){
            popup.style.display = 'block';
            document.body.style.overflow = 'hidden';
            let scroll = calcScroll();
            document.body.style.marginRight = `${scroll}px`;
        }

    },time);
}

function showPopupByScroll(selector){
    window.addEventListener('scroll', () => {
        if ((window.pageYOffset + document.documentElement.clientHeight >= (document.documentElement.scrollHeight - 1)) && btnPressed == false){
            document.querySelector(selector).click();
        }
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
bindPopup('.fixed-gift', '.popup-gift', '.popup-close', true);

// showPopupByTime('.popup-consultation', 6000);

showPopupByScroll('.fixed-gift');

}

export default popups;
