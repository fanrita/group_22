function runLogic(widget, color = "red") {
  const light = widget.querySelector('.light');
  const btn = widget.querySelector('.btn');

  let isActive = true;

  btn.onclick = toggle;

  function toggle() {
    if (isActive) {
      toggleOff();
    } else {
      toggleOn();
    }
  }

  function toggleOn() {
    console.log('ffgg');
    btn.innerHTML="ON";
    light.style.backgroundColor= color;
    isActive = true;
  }


  function toggleOff() {
    btn.innerHTML="OFF";
    light.style.backgroundColor= "gray";
    isActive = false;
  }

  toggle();

}


export { runLogic };