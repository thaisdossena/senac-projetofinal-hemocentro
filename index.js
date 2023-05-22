let listaDeDoadores = []
let menu

while (menu !== 5) { 
    menu = Number(prompt(`
        Sistema de cadastro de doadores de sangue        

        1. Cadastrar doadores
        2. Lista de doadores
        3. Buscar doador por tipo sanguíneo
        4. Buscar doador por data da última doação
        5. Sair

        Selecione a opção desejada:
        `)
    )

    switch(menu) {
        case 1:
            cadastrarDoador();
            break;
        case 2:
            listarDoadores();
            break;
        case 3:
            buscarPorTipoSanguineo();
            break;
        case 4:
            buscarPorDataUltimaDoacao();
            break;
        case 5:
            alert(`Obrigado por acessar o nosso sistema!`);
        default:
            alert(`Opção inválida, digite uma opção válida!`);
            break
    }
}

// Função para cadastrar um novo doador
function cadastrarDoador() {
    const nome = prompt(`Digite seu nome completo`);
    const idade = parseInt(prompt(`Qual a sua idade?`));
    const peso = Math.round(prompt(`Qual o seu peso em kg?`));
    const tipoSanguineo = prompt(`Qual o seu tipo sanguíneo?`).toUpperCase();
    const ultimaDoacao = prompt(`Data da última doação no formato (dd/mm/aaaa):`);
        
    //Objeto
    const doador = {
        nome, 
        idade, 
        peso, 
        tipoSanguineo,
        ultimaDoacao,
    };

    listaDeDoadores.push(doador);
    alert(`Heróis vêm em todos os tipos e tamanhos. Obrigado, seu cadastro foi realizado com sucesso!`);
}

//Função para listar os doadores
function listarDoadores() {
    if (listaDeDoadores.length === 0) {
        alert(`Nenhum doador cadastrado`);
    } else {
        //imprime lista de doadores
        let mensagem = `
        -------------------- LISTAGEM DE DOADORES --------------------

             NOME     | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
        `

        for (let doador of listaDeDoadores) {
            mensagem += `\n         ${doador.nome}      |    ${doador.idade}    |    ${doador.peso}    |          ${doador.tipoSanguineo}          |    ${doador.ultimaDoacao}`
        }
        alert(mensagem)
    }
}

function buscarPorTipoSanguineo() {  
    if (listaDeDoadores.length === 0 ) {
        alert(`Não existem doadores cadastrados!`);
        return;
    }
     
    const buscarPorTipoSanguineo = prompt(`Digite o tipo sanguíneo.`).toUpperCase() 

    let doadores = [];//variavel temporária
     
    for(let doador of listaDeDoadores) {
        if (doador.tipoSanguineo.includes(buscarPorTipoSanguineo)) {
            doadores.push(doador);
        }
    }
    
    if (doadores.length === 0) {
        alert(`Não há doadores com esse tipo sanguíneo!`);
    } else {        
        //Imprime lista de doadores por tipo sanguíneo
        let mensagem = `
        -------------------- LISTAGEM DE DOADORES --------------------

             NOME     | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
        `

        for(let doador of doadores) {
            mensagem += `\n         ${doador.nome}      |    ${doador.idade}    |    ${doador.peso}    |          ${doador.tipoSanguineo}          |    ${doador.ultimaDoacao}`
        } 
        alert(mensagem);
    }
}

function buscarPorDataUltimaDoacao() {
     if (listaDeDoadores.length === 0 ) {
        alert(`Não existem doadores cadastrados!`);
        return;
    }

    const dataBusca = prompt(`Digite a data para busca`);

    let doadores = [];//variavel temporária

    for(let doador of listaDeDoadores) {
        if (doador.ultimaDoacao.includes(dataBusca)) {
            doadores.push(doador);
        }
    }
  
    if (doadores.length === 0) {
        alert(`Não há registro de doação nessa data!`);
    } else {
    //Imprime lista de doadores por data
        let mensagem = `
        -------------------- LISTAGEM DE DOADORES --------------------

             NOME     | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
        `
        for(let doador of doadores) {
            mensagem += `\n         ${doador.nome}      |    ${doador.idade}    |    ${doador.peso}    |          ${doador.tipoSanguineo}          |    ${doador.ultimaDoacao}`
        }         
        alert(mensagem);
    }
}

//Q11111111111(Pulo da gata Lilith)
