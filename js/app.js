let programm = () => {
    let helixone = document.querySelector(".helixone");
    let helixtwo = document.querySelector(".helixtwo");
    let rotatehelixone = 45;
    let rotatehelixtwo = 135;

    let mechanism = () => {
        helixone.style.transform = "rotateZ(" + rotatehelixone + "deg)";
        helixtwo.style.transform = "rotateZ(" + rotatehelixtwo + "deg)";
        rotatehelixone = rotatehelixone + 1;
        rotatehelixtwo = rotatehelixtwo + 1;
    }

    let interval = setInterval(mechanism, 1);

}