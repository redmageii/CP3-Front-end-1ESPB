// Autor: Matheus Ricardo - RA560099

// Função do botão para enviar mensagem
function enviar(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('e-mail').value;
    var telefone = document.getElementById('telefone').value;
    var assunto = document.getElementById('assunto').value;
    var mensagem = document.getElementById('mensagem').value;

    if (nome.length >= 3 && email !== '' && telefone !== '' && mensagem !== ''){
        alert(`Mensagem enviada com sucesso!\nNome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nAssunto: ${assunto}\nMensagem: ${mensagem}`);
    }
    else if (nome.length < 3 && email === '' && telefone === '' && mensagem === ''){
        alert('Preencha corretamente os campos!\nNome deve ter no mínimo 3 caracteres.\nE-mail, telefone e mensagem não podem estar vazios.');
    }
    else {
        alert('Preencha todos os campos!');
    }
}

// Menu dropdown para seleção de assunto
switch (assunto){
  case 'Adoção':
    console.log('Adoção');
    paragrafo.innerHTML = `Com essa seleção, a mensagem será enviada para o setor responsável por adoção.`;
    break;
  case 'Doação':
    console.log('Doação');
    paragrafo.innerHTML = `Com essa seleção, a mensagem será enviada para o setor responsável por doação.`;
    break;
  case 'Ajuda':
    console.log('Ajuda');
    paragrafo.innerHTML = `Com essa seleção, a mensagem será enviada para o setor responsável por ajuda.`;
    break;
  case 'Outros':
    console.log('Outros');
    paragrafo.innerHTML = `Com essa seleção, a mensagem será enviada para o setor responsável por outros assuntos.`;
    break;
  default:
    console.log('Assunto não encontrado');
    break;
}