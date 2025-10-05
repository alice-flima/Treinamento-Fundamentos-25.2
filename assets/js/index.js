// Código JS aqui!
var numerocarrinho = 0;
let catalogoPaes = [ 
]; 

let catalogoSalsichas = [ 

]; 

let catalogoAcompanhamentos = [ 
    { id: 1, nome: "Queijo", preco: 29.99 }, 
    { id: 2, nome: "Batata palha", preco: 49.99 }, 
    { id: 3, nome: "Milho", preco: 79.99 },
    { id: 4, nome: "Uva passa", preco: 79.99 } 

]; 
let catalogoMolhos = [ 
    { id: 1, nome: "Ketchup", preco: 29.99 }, 
    { id: 2, nome: "Mostarda", preco: 49.99 }, 
    { id: 3, nome: "Maionese", preco: 79.99 },
    { id: 4, nome: "Molho de pimenta", preco: 79.99 } 

];
function Objeto(nome, preco, descricao, imagem, estado) {
  this.nome = nome;
  this.preco = preco;
  this.descricao = descricao;
  this.estado = 0;
  this.mudarestado = function() { //colocar ou tirar do carrinho
    if (this.estado == 0){
        this.estado = 1;
        numerocarrinho +=1;
    }
    else{
        this.estado = 0;
        numerocarrinho -=1;
    }
    };
}


let salsichaaoponto = new Objeto("Ao Ponto", 10, "oi", null, 0);
catalogoSalsichas.push(salsichaaoponto);
let salsichamalpassada = new Objeto("Mal Passada", 10, "oi", null, 0);
catalogoSalsichas.push(salsichamalpassada);
let salsichabempassada = new Objeto("Bem Passada", 10, "oi", null, 0);
catalogoSalsichas.push(salsichabempassada);
let Paotradicional = new Objeto("Tradicional", 10, "oi", null, 0);
catalogoPaes.push(Paotradicional);
let Paobrioche = new Objeto("Brioche", 10, "oi", null, 0);
catalogoPaes.push(Paobrioche);
let Paodesal = new Objeto("Pão de Sal", 10, "oi", null, 0);
catalogoPaes.push(Paodesal);
let Paoaustraliano = new Objeto("Australiano", 10, "oi", null, 0);
catalogoPaes.push(Paoaustraliano);

function inicializarloja(){
    var pao1 = document.getElementById('pao1');
    catalogoPaes.forEach(function(pao) {
        console.log(pao.nome)
        catalogodepaes.innerHTML += pao.nome
    });
}

inicializarloja();
