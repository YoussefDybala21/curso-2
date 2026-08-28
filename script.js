const botao = document QuerySelectAll("button");
botao.addEventlistener("click",botaoClicado);

function botaoClicado() {
    let texto = botao.querySelector("span");
    texto.textContest++;
}