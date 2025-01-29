/**
* Simulador dos operadores logicos 
*/
let sw1 = false
let sw2 = false
let quebrado = 0
function sw(receive) {
    // Cria um objeto usando a classe Audio
    if(receive === 3) {
    let som = new(Audio)
    som.src = "sound/glassbreaking.wav"
    som.play()
    // Trocar a imagem
    quebrado = 1
    } 
    if(quebrado == 1) {
        document.getElementById('lamp').src = "img/broken.jpg"
    }
    if(receive === 1 && sw1 == false){
        document.getElementById('sw1').src = "img/swon.png"
        sw1 = true
    } else if(receive === 1 && sw1 == true) {
        document.getElementById('sw1').src = "img/swoff.png"
        sw1 = false
    }

      if(receive === 2 && sw2 === false){
        document.getElementById('sw2').src = "img/swon.png"
        sw2 = true
    } else if(receive === 2 && sw2 === true) {
        document.getElementById('sw2').src = "img/swoff.png"
        sw2 = false
    }
// Ou, colocar um if pra executar o codigo da lampada
    if(sw1 === true && sw2 === true && quebrado === 0) {
        document.getElementById('lamp').src = "img/on.jpg"
    } else if (sw1 === false && quebrado !== 1 || sw2 === false && quebrado !== 1) {
        document.getElementById('lamp').src = "img/off.jpg"
    }

    if(receive === 4 && sw1 === false){
        document.getElementById('sw1').src = "img/swon.png"
        sw1 = true
        if (quebrado === 0){
        document.getElementById('lamp').src = "img/on.jpg"
        }
    }   else if(receive === 4 && sw1 === true) {
        document.getElementById('sw1').src = "img/swoff.png"
        sw1 = false
    }
        if(receive === 5 && sw2 === false){
        document.getElementById('sw2').src = "img/swon.png"
        sw2 = true
        if (quebrado === 0){
            document.getElementById('lamp').src = "img/on.jpg"
            }
    }   else if(receive === 5 && sw2 === true) {
        document.getElementById('sw2').src = "img/swoff.png"
        sw2 = false
    }

    if(receive === 6 && sw1 === false){
        document.getElementById('sw1').src = "img/swon.png"
        sw1 = true
        if (quebrado === 0){
        document.getElementById('lamp').src = "img/off.jpg"
        }
    } else if (receive === 6 && sw1 === true){
        document.getElementById('sw1').src = "img/swoff.png"
        sw1 = false
        if (quebrado === 0){
            document.getElementById('lamp').src = "img/on.jpg"
            }
    }

}