// Inicia autocompletado de la frase // 

const autoText = document.getElementById('autoText')

const arrayFrase = ["DESARROLLADOR WEB FULL STACK", "FULL STACK WEB DEVELOPER"]

const waitFor = (time) => {
    if (typeof time !== "number" || time < 0) throw new Error('waitFor debe recibir un numero positivo')
    return new Promise((res, rej) => setTimeout(() => (res()), time))
}

const animacion = async (html) => {
    while (true) {
        for (let frase of arrayFrase) {
            for (let letra of frase) {
                html.textContent += `${letra}`
                await waitFor(50)
            }
            await waitFor(1000)

            for (let letra of frase) {
                const texto = html.textContent
                html.textContent = texto.substr(0, texto.length - 1)
                await waitFor(30)
            }
        }
    }
}

animacion(autoText)

// Finaliza autocompletado de la frase //

//Inicia cambio de idioma de la pagina // 

const divBandera = document.getElementById('divBandera')
const bandera = document.getElementById('bandera')
const linkCv = document.getElementById('linkCV')
let image = document.getElementById('image')

bandera.addEventListener('click', () => {

    if (image.src == "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1200px-Flag_of_the_United_Kingdom_%283-5%29.svg.png") {

        bandera.dataset.language = "en"
        image.src = "https://static.vecteezy.com/system/resources/thumbnails/009/767/106/small/spain-flag-flag-of-spain-illustration-free-vector.jpg"

        linkCv.href = "./mi-curriculum/Curriculum-Vitae-Fabrizio-Julian-Casanova-English.pdf"

    } else if (image.src == "https://static.vecteezy.com/system/resources/thumbnails/009/767/106/small/spain-flag-flag-of-spain-illustration-free-vector.jpg") {

        bandera.dataset.language = "es"
        image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1200px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"

        linkCv.href = "./mi-curriculum/Curriculum-Vitae-Fabrizio-Julian-Casanova-Español.pdf"

    } else {
        console.error('Error al cargar el cambio de idioma')
    }
})

const textosAcambiar = document.querySelectorAll("[data-section")

const cambiarLenguaje = async lenguaje => {
    const pedidoJson = await fetch(`../lenguajes/${lenguaje}.json`)
    const textos = await pedidoJson.json()

    for (const textToChange of textosAcambiar) {
        const section = textToChange.dataset.section
        const value = textToChange.dataset.value

        textToChange.innerHTML = textos[section][value]
    }

}

divBandera.addEventListener('click', e => {
    cambiarLenguaje(e.target.parentElement.dataset.language)
})

//Finaliza cambio de idioma de la pagina // 