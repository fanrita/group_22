import './list.scss';

export function list(target = document.querySelector('body')) {
    const root = document.createElement('div');
    const form = document.createElement('form');
    const input = document.createElement('input');
    const textarea = document.createElement('textarea');
    const ul = document.createElement('ul');
    const submitBtn = document.createElement('input');

    form.appendChild(input);
    form.appendChild(textarea);
    form.appendChild(submitBtn);
    
    input.type = 'text';
    input.placeholder = 'Enter your name...';
    input.required = true;

    submitBtn.type = 'submit';
    submitBtn.value = 'Add comment';

    textarea.placeholder = 'Enter comment...';
    textarea.required = true;

    root.classList.add('list');
    form.classList.add('list__form');
    input.classList.add('list__input');
    textarea.classList.add('list__input', 'list__input_textarea');
    submitBtn.classList.add('list__input', 'list__button');
    ul.classList.add('list__items');

    root.appendChild(form);
    root.appendChild(ul);

    form.addEventListener('submit', (eventObject) => {
        eventObject.preventDefault();
        renderListItem();
    });


    target.appendChild(root);

    const getDate = () => {
      //but it is possible to use momentjs
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let hours = date.getHours();
      let minutes = date.getMinutes();
      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      return `${day}.${month}.${date.getFullYear()} in ${hours}:${minutes}`;
    };

    function renderListItem() {
        const nameValue = input.value;
        const commentValue = textarea.value;
        const timeValue = getDate();

        const li = document.createElement('li');
        const name = document.createElement('div');
        const comment = document.createElement('div');
        const time = document.createElement('div');

        li.appendChild(name);
        li.appendChild(comment);
        li.appendChild(time);
        li.classList.add('list__items__item');

        name.innerHTML = `<h3>${nameValue}</h3>`;
        name.classList.add('list__items__item_author');
        comment.textContent = commentValue;
        comment.classList.add('list__items__item_comment');
        time.textContent = timeValue;
        time.classList.add('list__items__item_time');

        ul.appendChild(li);
        input.value = '';
        textarea.value = '';
    }
}