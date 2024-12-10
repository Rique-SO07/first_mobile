//esse código serve para controlar o tamanho da tela, e quando chegar no determinado ponto, vai existir o menu hamburguer (burguer) o menu vai ser exibido 
//function /if= é uma função que condiciona ou verifica o tamanho da tela ,e se for maior valor que 768 ,ele vai exibir o menu hamburguer caso for menor ele será ocultado 
function mudouTamanho () {
    if (window.innerWidth >= 768) {
        // itens.slyle.display = 'inline-block'
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}     

function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
 }  