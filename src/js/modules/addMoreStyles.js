import {getData} from './services/services';

const addMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    btn.addEventListener('click', function() {
        getData('http://localhost:3000/styles')
            .then(res => renderCards(res))
            .catch(error => console.log(error));
            this.remove();
    });

    function renderCards(response){
        response.forEach(({src,title,link}) =>{
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
            <div class=styles-block>
            <img src=${src} alt>
            <h4>${title}</h4>
            <a href="${link}">Подробнее</a>
            </div>`;

            document.querySelector(wrapper).appendChild(card);
        });
    }
};


export default addMoreStyles;
