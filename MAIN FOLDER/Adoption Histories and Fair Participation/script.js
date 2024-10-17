const botaoEncontrar = document.querySelector('.botao-encontre')
const listaFeiras = document.querySelector('.lista-feiras')
const mapa = document.querySelector('#google-map');

botaoEncontrar.addEventListener('click', () =>{
    listaFeiras.scrollIntoView()
})

function atualizarMapa(local) {
    let src = "";

    switch (local) {
        case "Shopping Internacional de Guarulhos":
            src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.230022387182!2d-46.550921046921296!3d-23.488222957605327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f8055555555%3A0x6e4fd72917565c63!2sInternacional%20Shopping%20Guarulhos!5e0!3m2!1spt-BR!2sbr!4v1729192201731!5m2!1spt-BR!2sbr";
            break;
        case "The Dog - Unidade Vila Rica":
            src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.741204306324!2d-46.519696224966495!3d-23.577736462193517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d6a81ac0cd7%3A0xf84714c7b7a1842f!2sPet%20The%20Dog%20-Unidade%20Vila%20Rica!5e0!3m2!1spt-BR!2sbr!4v1729193463601!5m2!1spt-BR!2sbr";
            break;
        case 'Morumbi Town Shopping':
            src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.2436304444145!2d-46.742212421219094!3d-23.63144450936119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51455c412b75%3A0x615b242b99a74c56!2sMorumbi%20Town%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1729193571069!5m2!1spt-BR!2sbr"
        break;
        case 'The Dog - Unidade Vila Diva':
            src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.792074437302!2d-46.55439912496665!3d-23.5759100621264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c33edf55bc7%3A0x65ea3404cf278ea2!2sPet%20The%20Dog%20-%20Unidade%20Vila%20Diva!5e0!3m2!1spt-BR!2sbr!4v1729193690536!5m2!1spt-BR!2sbr"
        break;
        case 'Petland Brooklin':
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7311.2467584575!2d-46.68582205855326!3d-23.617836334843137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce515e519ea0a5%3A0x6a4a490bb0e53660!2sPetland%20Nebraska!5e0!3m2!1spt-BR!2sbr!4v1729193861345!5m2!1spt-BR!2sbr'
        break
        case 'Museu do Ipiranga':
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5228933605777!2d-46.61454992122994!3d-23.585573007753684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5be650476023%3A0x2c33390e6e3805b1!2sMuseu%20do%20Ipiranga!5e0!3m2!1spt-BR!2sbr!4v1729193940014!5m2!1spt-BR!2sbr'
        break
        case 'The Dog - Unidade Penha':
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.2470647895557!2d-46.547776924968524!3d-23.52361466020604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5fa39ae4ffe9%3A0x59abbad11f818528!2sPet%20The%20Dog%20-%20Unidade%20Penha!5e0!3m2!1spt-BR!2sbr!4v1729194011224!5m2!1spt-BR!2sbr'
        break
        case 'The Dog - Unidade Vila Diva':
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.792074437302!2d-46.55439912496665!3d-23.5759100621264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c33edf55bc7%3A0x65ea3404cf278ea2!2sPet%20The%20Dog%20-%20Unidade%20Vila%20Diva!5e0!3m2!1spt-BR!2sbr!4v1729194057321!5m2!1spt-BR!2sbr'
        break
        case 'Petland - Moema Passáros':
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.9701541405093!2d-46.67476452122521!3d-23.605403308448185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a07711f7981%3A0x137cff581ba5bd18!2sPetland%20Moema%20P%C3%A1ssaros!5e0!3m2!1spt-BR!2sbr!4v1729194118519!5m2!1spt-BR!2sbr'
        break
        default:
            break;
    }

    mapa.setAttribute('src', src);
}
