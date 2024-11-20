let x = 0;
let dados = [];
let informacoes = ["", 0, "", 0];
let variaveis = [];

document.getElementById('botao').addEventListener('click', () => {

    x++;
    const informacoesAdicionadas = mostrarNome();
    dados.push([...informacoesAdicionadas]);

    const novoDado = `dados ${novoDado.length + 1}`;
    dados.push(informacoes);
    dados.push(dados);
});

function mostrarNome () {
    const inputNome = document.getElementById('nome').value;
    const inputIdade = document.getElementById('idade').value;
    const inputEmail = document.getElementById('email').value;
    const inputTelefone = document.getElementById('telefone').value;

    informacoes = [nome,idade,email,telefone]
    console.log(informacoes);
    console.log(x);
    return informacoes
}

const tabelaBody = document.querySelector("#tabela tbody");

informacoes.forEach(informacoes => {

    const NovaLinha = document.createElement("tr");

    const celulaNome = document.createElement("td");
    celulaNome.textContent = informacoes.nome;
    const celulaIdade = document.createElement("td");
    celulaIdade.textContent = informacoes.idade;
    const celulaEmail = document.createElement("td");
    celulaEmail.textContent = informacoes.idade;
    const celulaTelefone = document.createElement("td");
    celulaTelefone.textContent = informacoes.telefone;

    NovaLinha.appendChild(celulaNome);
    NovaLinha.appendChild(celulaIdade);
    NovaLinha.appendChild(celulaEmail);
    NovaLinha.appendChild(celulaTelefone);

    tabelaBody.appendChild(NovaLinha);

});