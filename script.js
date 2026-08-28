const botao = document QuerySelectAll("button");
botao.addEventlistener("click",botaoClicado);

function botaoClicado(params) {
    let texto = botao.querySelector("span");
    texto.textContest++;
}