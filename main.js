$(document).ready(function(){ /*Usamos '$' para chamar o jQuery*/
    $('header button').click(function(){ //Outra forma de adicionar um evento a um elemento, além da que vimos e JS (addEventListener)
        $('form').slideDown(); //Aplicou o efeito de abertura deslizante do formulário quando clicar em "Nova Imagem+"
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp(); //Aplicou o efeito de recolhimento deslizante do formulário quando clicar em "Cancelar"
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); //'val' no jQuery é equivalente ao 'value' do html convencional
        const novoItem = $('<li style="display:none"></li>'); //como faremos que as novas imagens sigam o padrão das anteriores, vamos montar a mesma estrutura que fizemos no HTML (li, img src, div, etc...). Iniciamos com 'display: none' para que a nova imagem não apareça de primeira, mas que tenha um efeito ao surgir na tela
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); // criação do elemento img no jQuery e adição deste novo elemento ao 'novoItem' através do '.apendTo()'
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul'); //por último, inserimos a linha que criamos, à nossa Unordered List (ul)
        $(novoItem).fadeIn(1000); // aplica o efeito de 'surgir' ao adicionar a nova imagem. Como o 'fadeIn' é uma função, precisa vir acompanhado de parênteses, que estão preenchidos em milisegundos para determinar quanto tempo a imagem levará para surgir completamente na tela
        $('#endereco-imagem-nova').val(''); //limpa o campo/formulário da URL após um novo item ter sido adicionado
    })
}) 