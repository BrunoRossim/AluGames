function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);//como no html o id está pelos numeros, precisamos concatenar para selecionar sempre o jogo clicado correto.
    let imagem = gameClicado.querySelector('.dashboard__item__img');//coloco o "." para dizer que é uma classe.
    let botao = gameClicado.querySelector('.dashboard__item__button');//chamamos a propria variavel associando ja ao que ela faz, e declarando a classe.
    //let nomeJogo = gameClicado.querySelector('.dashboard__item__name'); pegando tbm o nome do jogo.
    //alert(nomeJogo.textContent); alerta se estamos pegando realmente o jogo no clique.

    //condicionais para dizer se esta alugado ou não e para alterar os textos e cores dos botoes.
    if(imagem.classList.contains('dashboard__item__img--rented')) {//se entrou no if é que esta alugado e precisa voltar a disponivel.
       imagem.classList.remove('dashboard__item__img--rented');//removendo a classList especifica.
       botao.classList.remove('dashboard__item__button--return');//adicionando efeito de cores ao botao
       botao.textContent = 'Alugar';//se entrou no if quero alugar.
    } else {
        imagem.classList.add('dashboard__item__img--rented');//adicioando a classList especifica.
        botao.textContent = 'Devolver';//senão, eu quero devolver.
        botao.classList.add('dashboard__item__button--return');//senão, vou voltar a cor normal.
    }
}
/*Este projeto tinha como objetivo, que al clicar no botão 'Alugar', o mesmo mudasse o testo para 'Devolver', e ainda trocar a cor dosbotões;
e adicionar uma cor opaca ao logo do jogo. Quando o jogo ja estivesse alugado, deviamos clicar novamente agora no botão 'Devolver' e o mesmo deveria retornar
para 'Alugar' retornando as originalidades de cores.*/