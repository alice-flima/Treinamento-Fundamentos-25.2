// Código JS aqui!
let numerocarrinho = 0; 
let valorcarrinho = 0;
let pao = 0;
let salsicha = 0;
const menuitems = document.querySelectorAll(".carrinhounico");
let catalogo = [ 
    { id: 1, nome: "Pão Tradicional", preco: 10.00, imagem: "paotradicional.jpg", quantidade: 0 },
    { id: 2, nome: "Pão de Sal", preco: 10.00, imagem: "paobrioche.png", quantidade: 0 },
    { id: 3, nome: "Pão Brioche", preco: 10.00, imagem: "paodesal.jpg", quantidade: 0 },
    { id: 4, nome: "Australiano", preco: 10.00, imagem: "paoaustraliano.jpg", quantidade: 0 },
    { id: 5, nome: "Ao ponto", preco: 10.00, imagem: "salsichaaoponto.jpg", quantidade: 0 },
    { id: 6, nome: "Mal passada", preco: 10.00, imagem: "salsichamalpassada.jpg", quantidade: 0 },
    { id: 7, nome: "Bem passada", preco: 10.00, imagem: "salsichabempassada.jpg", quantidade: 0 },
    { id: 8, nome: "Vegetariana", preco: 10.00, imagem: "salsichavegetariana.png", quantidade: 0 },
    { id: 9, nome: "Milho", preco: 29.99, quantidade: 0 },
    { id: 10, nome: "Queijo", preco: 49.99, quantidade: 0 },
    { id: 11, nome: "Batata palha", preco: 79.99, quantidade: 0 }
];
let choosenproduct = catalogo[0];
menuitems.forEach((item, index) => {
  item.addEventListener("click", () => {
    choosenproduct = catalogo[index];
    ///currentproductNome.textContent = choosenproduct.nome;
    ///currentproductPreco.textContent = "$" + choosenproduct.preco;
    if(index <=3 ){
       if(pao==0){
        pao =1;
        numerocarrinho+=1;
        valorcarrinho+= choosenproduct.preco;
        document.getElementById("numerocarrinho").innerHTML = numerocarrinho
        choosenproduct.quantidade = 1;
        menuitems[index].textContent = "Remover"
        menuitems.style.backgroundColor = "red";
       }
       else{
        if (choosenproduct.quantidade == 0){
            alert("Você só pode escolher um pão")
        }
        else{
        pao =0;
        numerocarrinho-=1;
        valorcarrinho-= choosenproduct.preco;
        document.getElementById("numerocarrinho").innerHTML = numerocarrinho
        choosenproduct.quantidade = 0;
        menuitems[index].textContent = "Adicionar"
       }
    }
}
    else if (index<=7){
        if(salsicha==0){
        salsicha =1;
        numerocarrinho+=1;
        valorcarrinho+= choosenproduct.preco;
        document.getElementById("numerocarrinho").innerHTML = numerocarrinho
        choosenproduct.quantidade = 1;
        menuitems[index].textContent = "Remover"
        }
        else{
        if (choosenproduct.quantidade == 0){
            alert("Você só pode escolher uma salsicha");
        }
        else{
        salsicha =0;
        numerocarrinho-=1;
        valorcarrinho-= choosenproduct.preco;
        document.getElementById("numerocarrinho").innerHTML = numerocarrinho
        choosenproduct.quantidade = 0;
        menuitems[index].textContent = "Adicionar"
       }
    }
}
    else{
        if(choosenproduct.quantidade ==0){
        numerocarrinho+=1;
        valorcarrinho+= choosenproduct.preco
        document.getElementById("numerocarrinho").innerHTML = numerocarrinho
        choosenproduct.quantidade = 1;
        menuitems[index].textContent = "Remover"
        }
        else{
        numerocarrinho-=1;
        valorcarrinho-= choosenproduct.preco;
        document.getElementById("numerocarrinho").innerHTML = numerocarrinho
        choosenproduct.quantidade = 0;
        menuitems[index].textContent = "ReAdicionar"
        }
    }
    });
  });
