// Código JS aqui!
var numerocarrinho = 0; //controla quantos itens tem no carrinho

let catalogoPaes = [ 
    { id: 1, nome: "Tradicional", preco: 10.00, imagem: "pao-tradicional.jpg", quantidade: 0 },
    { id: 2, nome: "Brioche", preco: 10.00, imagem: "pao-brioche.jpg", quantidade: 0 },
    { id: 3, nome: "Pão de Sal", preco: 10.00, imagem: "pao-de-sal.jpg", quantidade: 0 },
    { id: 4, nome: "Australiano", preco: 10.00, imagem: "pao-australiano.jpg", quantidade: 0 }
]; 

let catalogoSalsichas = [ 
    { id: 1, nome: "Ao Ponto", preco: 10.00, imagem: "salsicha-aoponto.jpg", quantidade: 0 },
    { id: 2, nome: "Mal Passada", preco: 10.00, imagem: "salsicha-malpassada.jpg", quantidade: 0 },
    { id: 3, nome: "Bem Passada", preco: 10.00, imagem: "salsicha-bempassada.jpg", quantidade: 0 }
]; 

let catalogoAcompanhamentos = [ 
    { id: 1, nome: "Queijo", preco: 29.99}, 
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

//outra forma de criar e manipular os objetos:
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