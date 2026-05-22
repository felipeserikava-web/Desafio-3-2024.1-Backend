//função de mudar imagem pelo id e pela url
function changeImage(id, url) {
  document.getElementById(id).src = url;
}
//função de mudar texto pelo id e pelo texto
function changeText(id, text) {
  document.getElementById(id).innerText = text;
}

//Variavel qu epode mudar para armazenar o numero do pokemon atual para buscar o URL 
let pokemonAtual = 1;

function atualizarPokedex(){

  //Variável que armazena endereço do pokemon na API
  let url = "https://pokeapi.co/api/v2/pokemon/"+pokemonAtual;

  //função fetch para buscar com o URL do pokemon os dados do pokemon 
  fetch(url)
  //Converter a resposta da API para JSON que o JavaScript consiga entender
    .then(function(resposta){
      return resposta.json();
    })

    //O objeto JSON com os dados do pokemon é armazenado em "dadosDoPokemon"", e é exibidoo nome e a imagem do pokemon com as funções Change
    // "
    .then(function(dadosDoPokemon){
      changeText("name", dadosDoPokemon.name)
      changeImage("img_sprite_front_default", dadosDoPokemon.sprites.front_default);
    })

    //Caso haja algum erro nos "then" , é exibido que houve um erro na busca
    .catch(function(erro){
      console.log("Erro ao buscar o Pokémon:", erro);
    });

}


//função para o botão änterior" para ele voltar o "pokemonAtual", respeitando que caso clique no anterior no pokemon atual 1 ele volte para o ultimo pokemon da API
function previousPokemon() {
   pokemonAtual--;
   if(pokemonAtual < 1){
    pokemonAtual = 1025;
   }

  //Apos a troca do valor do pokemon atual, é chamado a funcão atualizarPokedex para que ele pegue o URL do pokemonAtual, caça na API esse pokemon, e por final com os dados recebidos da API, é trocado o nome e a imagem.
   atualizarPokedex();
  }


//função para o botão "póximo" utilizando tambem o pokemonAtual se clicarem no botão próximo no ultmo pokemon, é direcionado para o primeiro pokemon.   
function nextPokemon() {
pokemonAtual++;
  if(pokemonAtual > 1025){
    pokemonAtual = 1;
  }
  atualizarPokedex();
}


//Aqui é onde o site vai começar, ele primeiro chama a função atualizarPokedex para exibir o pokemon atual "1", e como o usuário só pode interagir com os botões "proximo""e änterior", quando ele clicar um desses botões ie chamar a funçao correspondendo e apos executar a funcao é chamado a funçao atualizar pokedex para atualizar a interface  
atualizarPokedex();

