
count = 0;
next.addEventListener("click", showText);

function showText() {
    count++;
    if (count == 1) {
        text.innerHTML=""
        text.innerHTML += "ESPERO QUE TE GUSTE ESTO";
    } else if (count == 2) {
        text.innerHTML += "<br><br>TE LO HE PUESTO FACILITO PARA QUE NO TE CUESTE";
    } else if (count == 3) {
        text.innerHTML += textFormat("ESPERO QUE TE GUSTE.")
    } else if (count == 4){
        text.innerHTML += textFormat("TE QUIERO 🤍")
    }else if (count == 5){
        text.innerHTML=""
        link.innerHTML= textFormat("Pulsa aqui:")

        count = 0
    }
}

function textFormat(text){
    return `<br><br>${text}`
}