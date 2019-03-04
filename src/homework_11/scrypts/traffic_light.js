function trafficLight(light) {
    const buttons = light.querySelectorAll('.light__btn');

    for(const button of buttons ){
        button.onclick = () => {
            switchOn(button);
        }
    }

    function switchOn(button) {
        switchOff();
        button.classList.add('btn_active');
    }


    function switchOff() {
      for(const button of buttons ){
        button.classList.remove('btn_active');
      }
    }
}


export { trafficLight };