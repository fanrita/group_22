import './list.scss';
import { Request } from '../utils/request';

const prodURL = 'https://evening-dawn-11092.herokuapp.com/comments';

export class List {

  constructor(target = document.querySelector('body')) {
    this._target = target;
    this._tasks = [];// COLLECTION
    this._request = new Request();
    this.render();
    this.fetchData();
  }

  onSubmit(e) {
    e.preventDefault();
    const nameValue = this._input.value;
    const commentValue = this._textarea.value;
    const requestData = { "author": nameValue, "text": commentValue };

    this._request.post(
      prodURL,
      JSON.stringify(requestData),
      (response) => {
        const newItem = this.renderListItem(JSON.parse(response));
        this._ul.appendChild(newItem);
        this._input.value = '';
        this._textarea.value = '';
      },
      (status, response) => {
        alert(response);
      });
  }


  render() {

    this._root = document.createElement('div');
    this._form = document.createElement('form');
    this._input = document.createElement('input');
    this._textarea = document.createElement('textarea');
    this._ul = document.createElement('ul');
    this._submitBtn = document.createElement('input');

    this._form.appendChild(this._input);
    this._form.appendChild(this._textarea);
    this._form.appendChild(this._submitBtn);

    this._input.type = 'text';
    this._input.placeholder = 'Enter your name...';
    this._input.required = true;

    this._submitBtn.type = 'submit';
    this._submitBtn.value = 'Add comment';

    this._textarea.placeholder = 'Enter comment...';
    this._textarea.required = true;

    this._root.classList.add('list');
    this._form.classList.add('list__form');
    this._input.classList.add('list__input');
    this._textarea.classList.add('list__input', 'list__input_textarea');
    this._submitBtn.classList.add('list__input', 'list__button');
    this._ul.classList.add('list__items');

    this._root.appendChild(this._form);
    this._root.appendChild(this._ul);

    this._form.addEventListener('submit', (eventObject) => this.onSubmit(eventObject));


    this._target.appendChild(this._root);

  }

  renderListItem(task) {
    const nameValue = task['author'];
    const commentValue = task['text'];
    const timeValue = task['date'];

    const li = document.createElement('li');
    const name = document.createElement('div');
    const comment = document.createElement('div');
    const time = document.createElement('div');

    li.id = `task-${task.id}`;
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

    return li;
  }

  renderList() {
    for (const task of this._tasks) {// MODEL
      console.log(task);
      const li = this.renderListItem(task);
      this._ul.appendChild(li);
    }
  }

  fetchData() {
    this._request.get(
      prodURL,
      (response) => {
        this._tasks = JSON.parse(response);
        this.renderList();
      },
      (status, response) => {
        alert('Something went wrong');
      });
  }
}
