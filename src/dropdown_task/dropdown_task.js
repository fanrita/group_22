import './dropdown_task.scss';
import { Dropdown } from './components/dropdown';

let dropdown = new Dropdown(document.querySelector('#dropDown'), [{title: 'hellow', value: 'hellowww'}, {title: 'hellow1', value: 'hellowww1'}, {title: 'hellow2', value: 'hellowww2'}], option => console.log('selected text', option));