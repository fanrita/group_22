import { runLogic } from './scrypts/logic';
import { showModal } from './scrypts/modal';
import './practika_11.scss';

const widgets = document.querySelectorAll('.greet-widget');
const buttonOrder = document.querySelector('.modal-section__button_order');
const buttonBuy = document.querySelector('.modal-section__button_buy');


for (const widget of widgets) {
  console.log(widget);
 runLogic(widget);
}


buttonOrder.onclick = () => {
  showModal("Make Order")
};

buttonBuy.onclick = () => {
  showModal("Buy All")
};

