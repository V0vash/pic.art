const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          menuItems = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          allMarks = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');

    menu.addEventListener('click', (e) =>{

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        allMarks.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        if(e.target && e.target.tagName == "LI"){
            menuItems.forEach(item => item.classList.remove('active'));
            e.target.classList.add('active');
             
            const tag = e.target.classList[0];

            if (tag == 'grandmother' || tag == 'granddad'){
                no.style.display = 'block';
                no.classList.add('animated', 'fadeIn');
            }

            allMarks.forEach(mark =>{
                if(mark.classList.contains(tag)){
                    mark.style.display = 'block';
                    mark.classList.add('animated', 'fadeIn');
                }

            });
        }
    });
};
export default filter;