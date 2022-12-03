// Inicia autocompletado de la frase // 

const autoText = document.getElementById('autoText')

const arrayFrase = ["DESARROLLADOR WEB FULL STACK", "FULL STACK WEB DEVELOPER"]

const waitFor = (time) => {
    if(typeof time !== "number" || time <0) throw new Error('waitFor debe recibir un numero positivo')
    return new Promise((res,rej) => setTimeout(() => (res()), time))
}

const animacion = async (html) => {
    while (true) {
        for (let frase of arrayFrase) {
            for(let letra of frase) {
                html.textContent += `${letra}`
                await waitFor(50)
            }
            await waitFor(1000)

            for(let letra of frase) {
                const texto = html.textContent
                html.textContent = texto.substr(0, texto.length-1)
                await waitFor(30)
            }
        }
    }
}

animacion(autoText)

// Finaliza autocompletado de la frase //

// Inicia copia de numero de Whatsapp //

//function copiar(texto){
//  const textoEnHtml = document.createElement('input')

    //document.getElementsByClassName('modal-body')[0].appendChild(textoEnHtml)

    //textoEnHtml.value = texto.innerHTML
    //textoEnHtml.select()

//    document.execCommand('copy')

//    document.getElementsByClassName('modal-body')[0].removeChild(textoEnHtml)

//    Toastify({
//        text: "¡Listo! Numero de celular copiado",
//        duration: 2000,
//        position: "center",
//        style: {
//            background: "black",
//        },
//      }).showToast();

//} 

// Finaliza copia de numero de Whatsapp // 


//Inicia cambio de idioma de la pagina // 

const divBandera = document.getElementById('divBandera')
const bandera = document.getElementById('bandera')
let image = document.getElementById('image')

bandera.addEventListener('click', () => {
    
    if(image.src == "https://negricases.com/es/wp-content/uploads/2019/12/idioma-ingles.png"){

        bandera.dataset.language = "en"
        image.src = "https://static.vecteezy.com/system/resources/thumbnails/009/767/106/small/spain-flag-flag-of-spain-illustration-free-vector.jpg"

    } else if(image.src == "https://static.vecteezy.com/system/resources/thumbnails/009/767/106/small/spain-flag-flag-of-spain-illustration-free-vector.jpg"){

        bandera.dataset.language = "es"
        image.src = "https://negricases.com/es/wp-content/uploads/2019/12/idioma-ingles.png"

    } else{
        console.error('Error al cargar el cambio de idioma')
    }
})

const textosAcambiar = document.querySelectorAll("[data-section")

const cambiarLenguaje = async lenguaje => {
    const pedidoJson  = await fetch(`../lenguajes/${lenguaje}.json`) 
    const textos = await pedidoJson.json()

    for (const textToChange of textosAcambiar){
        const section = textToChange.dataset.section
        const value = textToChange.dataset.value

        textToChange.innerHTML = textos[section][value]
    }

}

divBandera.addEventListener('click', e => {
    cambiarLenguaje(e.target.parentElement.dataset.language)
})

const navBar = document.getElementById("navBar")
const home = document.getElementById('home')
const sobreMi = document.getElementById('sobre-mi')
const misProyectos = document.getElementById('mis-proyectos')
const habilidades = document.getElementById('habilidades')
const estudios = document.getElementById('estudios')


function isElementPartiallyVisible(html) {
    const anchoViewport = window.innerWidth || document.documentElement.clientWidth
    const alturaViewport = window.innerHeight 



    //Posición de la caja del elemento
    const caja = html.getBoundingClientRect();
    const cajaDentroH = (caja.left >= 0 && caja.left <= anchoViewport) ||
                    (caja.right >= 0 && caja.right <= anchoViewport);
    const cajaDentroV = (caja.top >= 0 && caja.top <= alturaViewport) ||
                    (caja.bottom>= 0 && caja.bottom <= alturaViewport);
    return (cajaDentroH && cajaDentroV);
}

//setInterval(() => {console.log(isElementPartiallyVisible(home))},1000)


