const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const listaCoresRobos = document.querySelectorAll("[data-cor-robo]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const coresRobo = {
    "amarelo": {
        "caminho": 'img/Amarelo/Robotron 2000 - Amarelo.png'
    },
    "azul": {
        "caminho": "img/Azul/Robotron 2000 - Azul.png"
    },
    "branco":{
        "caminho": "img/Branco/Robotron 2000 - Branco.png"
    },
    "preto":{
        "caminho": "img/Preto/Robotron 2000 - Preto.png"
    },
    "rosa":{
        "caminho": "img/Rosa/Robotron 2000 - Rosa.png"
    },
    "vermelho":{
        "caminho": "img/Vermelho/Robotron 2000 - Vermelho.png"
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

function alterarCorRobotron(caminhoNovaImagem){
    document.querySelector("#imgRobo").src = caminhoNovaImagem;
}

listaCoresRobos.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        let caminhoNovaCorRobo = coresRobo[evento.target.dataset.corRobo].caminho
        alterarCorRobotron(caminhoNovaCorRobo);
    })
})
