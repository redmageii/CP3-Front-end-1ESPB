// Autor: Matheus Ricardo - RA560099

// Função do botão para enviar mensagem
function enviar(){
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var telefone = document.getElementById('telefone').value;
  var assunto = document.getElementById('assunto').value;
  var mensagem = document.getElementById('mensagem').value;

  if (nome.length >= 3 && email != '' && telefone != '' && mensagem != ''){
      alert(`Mensagem enviada com sucesso!\nNome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nAssunto: ${assunto}\nMensagem: ${mensagem}`);
  }
  else {
      alert('Preencha corretamente os campos!\nNome deve ter no mínimo 3 caracteres.\nemail, telefone e mensagem não podem estar vazios.');
  }
}

// Menu dropdown para seleção de assunto
switch (assunto){
case 'adocao':
  console.log('adocao');
  paragrafo.innerHTML = `Com essa seleção, a mensagem será enviada para o setor responsável por adoção.`;
  break;
case 'doacao':
  console.log('doacao');
  paragrafo.innerHTML = `Com essa seleção, a mensagem será enviada para o setor responsável por doação.`;
  break;
case 'ajuda':
  console.log('ajuda');
  paragrafo.innerHTML = `Com essa seleção, a mensagem será enviada para o setor responsável por ajuda.`;
  break;
case 'outros':
  console.log('outros');
  paragrafo.innerHTML = `Com essa seleção, a mensagem será enviada para o setor responsável por outros assuntos.`;
  break;
default:
  console.log('Assunto não encontrado');
  break;
}