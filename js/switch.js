function turnLights() {
    const lamp = document.getElementById("bulb");
    const button = document.getElementById("switch");

    console.log(lamp, button);
    lamp.classList.toggle("on");
    button.classList.toggle("on");
}
