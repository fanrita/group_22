import { trafficLight } from './scrypts/traffic_light';
import './homework_11.scss';

const lights = document.querySelectorAll('.light');

for (const light of lights) {
    console.log(light);
    trafficLight(light);
}



