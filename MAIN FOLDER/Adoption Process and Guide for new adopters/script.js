
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement; 
        const isActive = item.classList.contains('active');

        document.querySelectorAll('.accordion-item').forEach(i => {
            i.classList.remove('active');
        });
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

/* Resumidamente, todos os elementos do DOM que possuem a classe .accordion-header sao selecionados retornando uma NodeList armazenada na accondionHeaders. 
Para cada cabecalho é adicionado um Event Listener (click). Assim, dentro do Event Listener ocorre a identificacao do item clicado e verifica seu estado, verificando 
se o elemento esta ativo. Com o queryselectorall, todos os elementos com a classe .accordion-item sao selecionados, e o .forEach() repete sobre cada .accordion-item
selecionado e o .remove('active') garante que os outros cabecalhos estejam fechados (garantindo assim que apenas um item esteja aberto, e sempre que um novo 
item é clicado o outro feche automaticamente). o If(!isActive) verifica se o item clicado nao esta ativo, e o item.classList.add('active') adiciona a classe active ao 
elemento clicado. 👍   */