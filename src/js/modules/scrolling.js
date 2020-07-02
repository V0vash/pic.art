const scrolling = (upSelector) => {
    const up = document.querySelector(upSelector);

    window.addEventListener('scroll', () =>{
        if(document.documentElement.scrollTop > 1650){
            up.classList.add('animated', 'fadeIn');
            up.classList.remove('fadeOut');
        }else{
            up.classList.add('fadeOut');
            up.classList.remove('fadeIn');
        }

        let links = document.querySelectorAll('[href^="#"]'),
            speed = 0.3;

        links.forEach(link =>{
            link.addEventListener('click', function(event) {
                event.preventDefault();
                let scrollTop = Math.round(document.body.scrollTop || document.documentElement.scrollTop),
                    hash = this.hash,
                    toBlock = document.querySelector(hash).getBoundingClientRect().top,
                    start = null;

                requestAnimationFrame(step);

                function step(time) {
                    if (start === null){
                        start = time;
                    }

                    let progress = time - start,
                        r = (toBlock < 0 ? Math.max(scrollTop - progress/speed, scrollTop + toBlock) 
                            : Math.min(scrollTop + progress/speed, scrollTop + toBlock));
                    
                    document.documentElement.scrollTo(0, r);

                    if (r != scrollTop + toBlock) {
                        requestAnimationFrame(step);
                    } else {
                        location.hash = hash;
                    }
                }
            });
        });
    });

};
export default scrolling;