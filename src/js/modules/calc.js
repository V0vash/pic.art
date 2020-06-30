import {getData} from './services/services';

const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;

    getData('../../assets/price.json')
    .then(res => calcFunc(res));

    function renderOptions(obj, selector){
        for (let key in obj){
            const option = document.createElement('option');
            option.innerText = `${key}`;
            option.setAttribute(`value`, `${obj[key]}`);
            option.setAttribute(`name`, `${key}`);
            selector.append(option);
        }
    }

    const calcFunc = (response) => {
        for (let key in response){
            switch(key) {
                case 'sizes': 
                    renderOptions(response[key], sizeBlock);
                    break;
                case 'materials':
                    renderOptions(response[key], materialBlock);
                    break;
                case 'options':
                    renderOptions(response[key], optionsBlock);
                    break;
              }
        }

        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }

    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);

};

export default calc;