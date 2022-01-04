const imagens = document.querySelectorAll('.painel')
const setaVoltar = document.getElementById('btn-voltar')
const setaAvancar = document.getElementById('btn-avancar')
let imagemAtual = 0

if(imagemAtual === 0) {
    desabilitarSeta(setaVoltar)
}

setaAvancar.addEventListener('click', function(e){
    e.preventDefault()
    //se não for a última imagem, 
    //incrementa o contador e habilita a seta pra voltar, por que
    //têm imagens pra voltar
    if(imagemAtual !== imagens.length - 1) {
        imagemAtual++
        habilitarSeta(setaVoltar)
    }

    esconderImagensEMostrarImagemAtual()

    //se for a ultima imagem desabilita o clique da seta de avancar
    if(imagemAtual === imagens.length - 1) {
        desabilitarSeta(setaAvancar)
    }
})

setaVoltar.addEventListener('click', function(e){    
    e.preventDefault()
    //se não for a primeira imagem, decrementa o contador e habilita 
    //o botão de avançar, por que têm mais imagens pra avançar
    if(imagemAtual !== 0) {        
        imagemAtual--
        habilitarSeta(setaAvancar)
    }    
    
    esconderImagensEMostrarImagemAtual()
    
    //se for a primeira imagem desabilita o botão de voltar, 
    //por que não têm mais imagens pra voltar
    if(imagemAtual === 0) {
        desabilitarSeta(setaVoltar)
    }
})

function desabilitarSeta (seta) {
    seta.classList.add('desabilitar')
}

function habilitarSeta (seta) {
    seta.classList.remove('desabilitar')
}

function esconderImagensEMostrarImagemAtual() {
    //remove o mostrar de todos os elementos pra que a imagem suma
    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })

    //pega a imagem atual e define a classe mostrar pra que ela apareça
    imagens[imagemAtual].classList.add('mostrar')
}
