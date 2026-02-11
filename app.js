
count = 0;
next.addEventListener("click", showText);

function showText() {
    count++;
    if (count == 1) {
        text.innerHTML=""
        text.innerHTML += textFormat("ESPERO QUE TE GUSTE ESTO");
    } else if (count == 2) {
        text.innerHTML += textFormat("TE LO HE PUESTO FACILITO PARA QUE NO TE CUESTE");
    } else if (count == 3) {
        text.innerHTML += textFormat("SOLO CON UN BOTONCITO JAJAJ")
    } else if (count == 4){
        text.innerHTML += textFormat("ESPERO QUE TE GUSTE <3")
    }else if (count == 5){
        text.innerHTML += textFormat("TE QUIERO 🤍")
    } else if (count == 6){
        text.innerHTML=""
        link.innerHTML = textFormat("<a href=\"game.html\"><button class=\"link\">PULSA AQUÍ</button></a>")
    } else if (count > 8 && count < 12){
        text.innerHTML = textFormat("DEJA DE PULSAR YA NO?")
    } else if (count > 12 && count < 22){
        text.innerHTML = textFormat("PARA YA NO?")
    } else if (count > 22){
        text.innerHTML = textFormat("HAS PULSADO 22 VECES. <br>¿A QUE TE SUENA ESE NÚMERO? JAJAJ")
    }
}

function textFormat(text){
    return `<br><br>${text}`
}