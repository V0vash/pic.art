// import checkNumInputs from "./checkNumInputs";
import {postData} from "./services/services";

function forms (){
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]'),
          message = {
              loading: 'Загрузка...',
              success: 'Спасибо, мы скоро с вами свяжемся',
              failure: 'Что-то пошло не так',
              spinner: 'assets/img/spinner.gif',
              ok: 'assets/img/ok.png',
              fail: 'assets/img/fail.png'
          },
          path = {
              designer: 'assets/server.php',
              question: 'assets/question.php'
          };

    // checkNumInputs(phoneInputs);


    const clearInputs = () => {
        inputs.forEach(item =>{
            item.value='';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    };

    console.log(upload);
    upload.forEach((item) => {
        item.addEventListener('input', () =>{
            console.log(item.files[0].name);
            let dots;
            const arr = item.files[0].name.split('.');
            console.log(arr);
            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];

            item.previousElementSibling.textContent = name;
        });
    });

    forms.forEach((item) => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.append(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(()=>{
                item.style.display = 'none';
            },300);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let statusText = document.createElement('div');
            statusText.textContent = message.loading;
            statusMessage.appendChild(statusText);

            const formData = new FormData(item);

            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);


            postData(api, formData)
            .then(res => {
                console.log(res);
                statusImg.setAttribute('src', message.ok);
                statusText.textContent = message.success;
            })
            .catch(() =>{
                statusImg.setAttribute('src', message.fail);
                statusText.textContent = message.failure;
            })
            .finally(() => {
                clearInputs();
                setTimeout(()=>{
                    statusMessage.remove();
                    item.style.display = 'block';
                    item.classList.remove('fadeOutUp');
                    item.classList.add('fadeInUp');
                }, 5000);
            });


        });
    });



}

export default forms;