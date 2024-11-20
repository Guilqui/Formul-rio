let x = 0
let novoArray = [];

//campo de validação das informações inseridas
const checkIdade = /^[0-9]{1 | 2,}$/;
const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const checkTelefone = /^[0-9]{11,}$/;

//cria um evento no clique 
document.getElementById('botao').addEventListener('click', () => {

    //seleciona as informações inseridas no input a uma variavel
    const inputNome = document.getElementById('nome').value;
    const inputIdade = document.getElementById('idade').value;
    const inputEmail = document.getElementById('email').value;
    const inputTelefone = document.getElementById('telefone').value;

    //campo de validação usando o if
    if (!inputNome) {
        alert('Necessário inserir a nome')
        //linha abaixo é usada para prevenir o if caso ela não seje necessaria
        event.preventDefault();
        return
    }

    if (!inputIdade || checkIdade.test(inputIdade)) {
        alert('Necessário inserir a idade de até dois caracteres')
        event.preventDefault();
        return
    }

    if (!inputEmail || !checkEmail.test(inputEmail)) {
        alert('Necessário inserir a e-mail válido!')
        event.preventDefault();
        return
    }

    if (!inputTelefone || !checkTelefone.test(inputTelefone)) {
        alert('Necessário inserir a telefone válido com 11 caracteres')
        event.preventDefault();
        return
    }

    //salva os dados inseridos dentro de um array e adiciona +1 no indice "x"
    let informacoes = [inputNome, inputIdade, inputEmail, inputTelefone];
    x++;

    //adiciona em um novo array utilizando o indice "x" as informações passadas
    novoArray.splice(x, 0, informacoes);

    //mostrar funcionando dentro do codigo
    console.log(novoArray);
    console.log(x);

    //cria uma nova linha dentro da tabela
    const novaLinha = document.createElement('tr');

    //cria os 4 campos dentro da linha
    const celulaNome = document.createElement('td');
    //seleciona o conteudo inserido dentro da variavel dentro do campo da celula
    celulaNome.textContent = inputNome;
    const celulaIdade = document.createElement('td');
    celulaIdade.textContent = inputIdade;
    const celulaEmail = document.createElement('td');
    celulaEmail.textContent = inputEmail;
    const celulaTelefone = document.createElement('td');
    celulaTelefone.textContent = inputTelefone;

    //relaciona a linha com as informações passadas 
    novaLinha.appendChild(celulaNome);
    novaLinha.appendChild(celulaIdade);
    novaLinha.appendChild(celulaEmail);
    novaLinha.appendChild(celulaTelefone);

    //seleciona a tabela tbody do html e relaciona ela com a nova linha
    document.querySelector('#tabela tbody').appendChild(novaLinha);

    //limpa os campos dentro do input na pagina
    document.getElementById('nome').value = "";
    document.getElementById('idade').value = "" ;
    document.getElementById('email').value = "";
    document.getElementById('telefone').value = "";

});