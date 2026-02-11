const btn = document.querySelector("#no");
count = 0;
btn.addEventListener("click", showText);

function showText() {
    count++;
    if (count == 1) {
        text("ERES UNA CABRONA QUE LO SEPAS")
    } else if (count == 2) {
        text("VENGA YA TE HAS DIVERTIDO")
    } else if (count == 3) {
        text("VENGA PARA YA")
    } else if (count == 4) {
        text("NO TIENES SENTIMIENTOS")
    } else if (count == 5) {
        text("TE ODIO")
    } else if (count == 6) {
        text("DEJA DE PULSAR YA NO?")
    } else if (count == 7) {
        text("EL BOTÓN DEL SÍ ESTA ARRIBA, POR SI NO LO ENCUENTRAS")
    } else if (count == 8) {
        text("O PARAS O ME VAS A HACER ENFADAR")
    } else if (count == 9) {
        text("SE ACABÓ")
    } else if (count == 10) {
        text("SÍ PULSAS OTRA VEZ MATO AL PERRO 🔪🐕")
    } else if (count == 11) {
        text("🩸🩸🩸")
        alert("LLAMANDO A LA POLICÍA 👮 🚓")
    } else if (count == 12) {
        text("LITERALMENTE HAS MATADO A UN PERRITO")
    } else if (count == 13) {
        text("YO ME LO HARÍA MIRAR")
    } else if (count == 14) {
        text("PARAS? GRACIAS")
    } else if (count == 15) {
        text("TIENES LA REGLA?")
    } else if (count == 16) {
        text("TE VAS A CARGAR EL BOTÓN")
    } else if (count == 17) {
        text("NO HACES GRACIA")
    } else if (count == 18) {
        text("HE OIDO POR AHÍ QUE EL BOTÓN DEL SÍ HACE COSAS CHULAS")
    } else if (count == 19) {
        text("PRUEBA A PULSARLO")
    } else if (count == 20) {
        text("NO TE LO VAS A ARREPENTIR")
    } else if (count == 21) {
        text("DICÉN QUE EL SIGUIENTE NUMERO TIENE PREMIO")
    } else if (count == 22) {
        text("HAS PULSADO 22 VECES. ¿A QUÉ TE SUENA ESE NÚMERO?")
    } else if (count == 23) {
        text("22 VECES, ESTAS ABURRIDA EEEH")
    } else if (count == 24) {
        text("SABES QUE SI QUISIESE PODRÍA HACER QUE NO PUEDAS PULSAR MÁS VERDAD?")
    } else if (count == 25) {
        text("PERO NO LO VOY A HACER PORQUE ME GUSTA QUE ME HAGAS CASO")
    } else if (count == 26) {
        text("¡¡¡HAS PULSADO 26 VECES!!!")
    } else if (count == 27) {
        text("ESTAS ABURRIDA O QUÉ?")
    } else if (count == 28) {
        text("SE ACABÓ")
        btn.style.width = "300px";
        btn.style.height = "200px";
    } else if (count == 29) {
        text("")
        btn.style.width = "250px";
        btn.style.height = "150px";
    } else if (count == 30) {
        btn.style.width = "200px";
        btn.style.height = "100px";
    } else if (count == 31) {
        btn.style.width = "150px";
        btn.style.height = "50px";
    } else if (count == 32) {
        btn.style.width = "50px";
        btn.style.height = "25px";
    } else if (count == 33) {
        btn.style.width = "25px";
        btn.style.height = "12.5px";
    } else if (count == 34) {
        btn.style.width = "10px";
        btn.style.height = "5px";
    }

}

function text(text) {
    return btn.innerHTML = `${text}`
}
