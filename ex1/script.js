

function carregar() {
    var corpo = document.querySelector('.body')
    var cabeçalho = document.querySelector('.cabeçalho')
    var titulo = document.querySelector('.titulo')
    var horario = document.querySelector('.horas')
    var periodo = document.querySelector('.periodo')
    var momento = document.querySelector('.momento')

    var data = new Date()
    var hora = data.getHours()

    horario.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 6){
        //imagem madrugada
        periodo.src = "./imagens/madrugada.jpg"

        //cores madrugada
        cabeçalho.style.background = "orange"
        titulo.style.color ="white"
        corpo.style.background = "#ffc456"
        momento.innerHTML = "Madrugada"

    }else if(hora >= 6 && hora <12){
        //imagem dia
        periodo.src = "./imagens/manha.jpg"

        //cores manha
        cabeçalho.style.background = "#e2e2e2"
        titulo.style.color ="black"
        corpo.style.background = "whitesmoke"
        momento.innerHTML = "Manhã"

    } else if(hora >= 12 && hora <18){
        //imagem tarde
        periodo.src = "./imagens/tarde.jpg"

        //cores tarde
        cabeçalho.style.background = "skyblue"
        titulo.style.color ="white"
        corpo.style.background = "#acd7e7"
        momento.innerHTML = "tarde"

    }else{
        //imagem noite
        periodo.src = "./imagens/noite.jpg"

        //cores tarde
        cabeçalho.style.background = "#000036"
        titulo.style.color ="white"
        corpo.style.background = "#00005e"
        momento.innerHTML = "Noite"

        //link
        var rodape = document.querySelector('.rodape')
        rodape.style.color = "white"
    }
}