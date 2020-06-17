const sliders = (slides, direction, next, prev) => {
    let SlideIndex = 1,
        paused = false;
    const items = document.querySelectorAll(slides);

    function showSlides(n) {
        if(n > items.length){
            SlideIndex = 1;
        }

        if(n < 1){
            SlideIndex = items.length;
        }

        items.forEach(item =>{
            item.classList.add('animated');
            item.style.display = 'none';
        });

        items[SlideIndex - 1].style.display = 'block';

    }

    showSlides(SlideIndex);

    function changeSlide(n) {
        showSlides(SlideIndex += n);
    }

    try{
    const nextBtn = document.querySelector(next),
          prevBtn = document.querySelector(prev);

    nextBtn.addEventListener('click',() =>{
        changeSlide(1);
        items[SlideIndex-1].classList.remove('slideInRight');
        items[SlideIndex-1].classList.add('slideInLeft');
    });

    prevBtn.addEventListener('click',() =>{
        changeSlide(-1);
        items[SlideIndex-1].classList.remove('slideInLeft');
        items[SlideIndex-1].classList.add('slideInRight');
    });
    }catch(e){}

    function activateAnimation(){
        if (direction === 'vertical'){
            paused = setInterval(function() {
                changeSlide(1);
                items[SlideIndex-1].classList.add('slideInDown');
            },3000);
        } else {
            paused = setInterval(function() {
                changeSlide(1);
                items[SlideIndex-1].classList.remove('slideInRight');
                items[SlideIndex-1].classList.add('slideInLeft');
            },3000);
        }
    }

    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () =>{
        clearInterval(paused);
    });
    
    items[0].parentNode.addEventListener('mouseleave', () =>{
        activateAnimation();
    });

    

};

export default sliders;