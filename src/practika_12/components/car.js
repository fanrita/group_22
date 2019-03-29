import './car.scss';
import imgUrl from '../../../assets/images/car.png';

export class Car {
    constructor(target = document.querySelector('body'),  speed = 5) {
        this._target = target;
        this._render();
        this._pos = 0;
        this._speed = speed;
    }

    _render() {
        this._container = document.createElement('div');
        this._car = document.createElement('img');
        this._car.src = imgUrl;
        this._car.style.left = "0";
        this._car.style.top =  "0";

        this._container.classList.add('car__container');
        this._car.classList.add('car__container__car');

        this._container.appendChild(this._car);
        this._target.appendChild(this._container);
    }

    moveRight() {
      this._car.style.left = parseInt(this._car.style.left) + this._speed + 'px';
    }

    moveLeft() {
        if (parseInt(this._car.style.left)>0) {
          this._car.style.left = parseInt(this._car.style.left) - this._speed + 'px';
        }
    }
}