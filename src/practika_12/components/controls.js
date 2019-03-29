import './controls.scss';

export class Controls {
  constructor(car, target = document.querySelector('body')) {
    this._target = target;
    this._rightButtonTitle = 'Move right';
    this._leftButtonTitle = 'Move left';
    this.render();
    this.car = car;
  }

  render() {
    this._rightButton = document.createElement('button');
    this._rightButton.classList.add('btn');
    this._rightButton.innerHTML = `<span>${this._rightButtonTitle}</span>`;

    this._leftButton = document.createElement('button');
    this._leftButton.classList.add('btn');
    this._leftButton.innerHTML = `<span>${this._leftButtonTitle}</span>`;


    this._rightButton.addEventListener('click', (e) => {
      this.car.moveRight();
      });

    this._leftButton.addEventListener('click', (e) => {
      this.car.moveLeft();
    });

    this._target.appendChild(this._leftButton);
    this._target.appendChild(this._rightButton);
  }
}