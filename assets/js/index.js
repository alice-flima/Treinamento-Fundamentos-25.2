let numerocarrinho = 0; 
let valorcarrinho = 0;
let pao = 0;
let salsicha = 0;
let paes = [ 
    { id: 1, nome: "Pão Tradicional", preco: 5.00, imagem: "paotradicional.jpg", quantidade: 0, classe: "carrinhopaes", descricao: "O mais clássico"},
    { id: 2, nome: "Pão Brioche", preco: 5.00, imagem: "paobrioche.png", quantidade: 0, classe: "carrinhopaes", descricao:"Para um dogão mais macio" },
    { id: 3, nome: "Pão de Sal", preco: 4.00, imagem: "paodesal.jpg", quantidade: 0, classe: "carrinhopaes", descricao: "O comum que funciona" },
    { id: 4, nome: "Australiano", preco: 6.00, imagem: "paoaustraliano.jpg", quantidade: 0, classe: "carrinhopaes", descricao: "Para dar um tom sofisticado" },
]
let salsichas = [
    { id: 5, nome: "Ao ponto", preco: 5.00, imagem: "salsichaaoponto.jpg", quantidade: 0, classe: "carrinhosalsichas", descricao: "O clássico que funciona" },
    { id: 6, nome: "Mal passada", preco: 5.00, imagem: "salsichamalpassada.jpg", quantidade: 0, classe:  "carrinhosalsichas", descricao:"Para quem gosta de suculênica"},
    { id: 7, nome: "Bem passada", preco: 5.00, imagem: "salsichabempassada.jpg", quantidade: 0, classe:  "carrinhosalsichas", descricao: "Mais crocante" },
    { id: 8, nome: "Vegetariana", preco: 6.00, imagem: "salsichavegetariana.png", quantidade: 0, classe:  "carrinhosalsichas", descricao: "Porque dogão de planta ainda é dogão" },
]
let acomps =[
    { id: 9, nome: "Milho", preco: 2.00, imagem:"milho.jpg", quantidade: 0, classe: "carrinhoacomps", descricao: "Para dar um sabor a mais"},
    { id: 10, nome: "Queijo", preco: 3.00, imagem:"queijo.jpg", quantidade: 0,  classe: "carrinhoacomps", descricao: "Derretendo..." },
    { id: 11, nome: "Batata palha", preco: 2.50, imagem:"patatapalha.jpg", quantidade: 0,  classe: "carrinhoacomps", descricao:"A queridinha" }
];

function novoobjeto(objeto) {
    return `
        <div class="pro">
            <img src="assets/imgs/${objeto.imagem}" alt="${objeto.nome}" class="imagensprodutos">
                <h5 class="menuitem">${objeto.nome}</h5>
                <h7>${objeto.descricao}</h7>
                <h4>R$${objeto.preco}</h4>
                <button 
                    class="${objeto.classe}" 
                    data-id="${objeto.id}" >
                    Adicionar
                </button>
            </div>
        </div>
    `;
}
 function adicionarobjetos (){
    const containerPaes = document.getElementById("containerPaes");
    const containerSalsichas = document.getElementById("containerSalsichas");
    const containerAcomps = document.getElementById("containerAcomps");
    containerPaes.innerHTML = "";
    containerSalsichas.innerHTML = "";
    containerAcomps.innerHTML = "";
    paes.forEach(function(produto){
        const novoProduto = novoobjeto(produto);
        containerPaes.innerHTML += novoProduto;

    });
    salsichas.forEach(function(produto){
        const novoProduto = novoobjeto(produto);
        containerSalsichas.innerHTML += novoProduto;

     });   
    acomps.forEach(function(produto){
        const novoProduto = novoobjeto(produto);
        containerAcomps.innerHTML += novoProduto;

    });   
    }  
    
    
adicionarobjetos();
const menupaes = document.querySelectorAll(".carrinhopaes");
const menusalsichas = document.querySelectorAll(".carrinhosalsichas");
const menuacomps = document.querySelectorAll(".carrinhoacomps");



///seletor de paes
  let choosenpao = paes[0];
  menupaes.forEach((item, index) => {
  item.addEventListener("click", () => {
    choosenpao = paes[index];
       if(pao==0){
        pao =1;
        numerocarrinho+=1;
        valorcarrinho+= choosenpao.preco;
        document.getElementById("numerocarrinho").innerHTML = numerocarrinho;
        document.getElementById("valorcarrinho").innerHTML = `R$ ${valorcarrinho}`;
        choosenpao.quantidade = 1;
        menupaes[index].textContent = "Remover"
        menupaes[index].style.backgroundColor = ' #f1150dff';
       }
       else{
        if (choosenpao.quantidade == 0){
            alert("Você só pode escolher um pão")
        }
        else{
        pao =0;
        numerocarrinho-=1;
        valorcarrinho-= choosenpao.preco;
        document.getElementById("numerocarrinho").innerHTML = numerocarrinho;
        document.getElementById("valorcarrinho").innerHTML = `R$ ${valorcarrinho}`;
        choosenpao.quantidade = 0;
        menupaes[index].textContent = "Adicionar";
        menupaes[index].style.backgroundColor = ' antiquewhite';
       }
    }
 }); 
}); 
///seletor de salsichas
let choosensalsicha = salsichas[0];
menusalsichas.forEach((item, index) => {
    item.addEventListener("click", () => {
        choosensalsicha = salsichas[index];
        if(salsicha == 0){
            salsicha = 1;
            numerocarrinho += 1;
            valorcarrinho += choosensalsicha.preco;
            document.getElementById("numerocarrinho").innerHTML = numerocarrinho;
            document.getElementById("valorcarrinho").innerHTML = `R$ ${valorcarrinho}`;
            choosensalsicha.quantidade = 1;
            menusalsichas[index].textContent = "Remover";
            menusalsichas[index].style.backgroundColor = '#f1150d';
        } 
        else {
            if (choosensalsicha.quantidade == 0){
                alert("Você só pode escolher uma salsicha");
            } 
            else {
                salsicha = 0;
                numerocarrinho -= 1;
                valorcarrinho -= choosensalsicha.preco;
                document.getElementById("numerocarrinho").innerHTML = numerocarrinho;
                document.getElementById("valorcarrinho").innerHTML = `R$ ${valorcarrinho}`;
                choosensalsicha.quantidade = 0;
                menusalsichas[index].textContent = "Adicionar";
                menusalsichas[index].style.backgroundColor = 'antiquewhite';
            }
        }
    }); 
}); 
///seletor de acomps
let choosenacomp = acomps[0];
menuacomps.forEach((item, index) => {
    item.addEventListener("click", () => {
        let choosenacomp = acomps[index];
        if(choosenacomp.quantidade == 0){
            numerocarrinho += 1;
            valorcarrinho += choosenacomp.preco;
            document.getElementById("numerocarrinho").innerHTML = numerocarrinho;
            document.getElementById("valorcarrinho").innerHTML = `R$ ${valorcarrinho}`;
            choosenacomp.quantidade = 1;
            menuacomps[index].textContent = "Remover";
            menuacomps[index].style.backgroundColor = '#f1150d';
        } 
        else {
            numerocarrinho -= 1;
            valorcarrinho -= choosenacomp.preco;
            document.getElementById("numerocarrinho").innerHTML = numerocarrinho;
            document.getElementById("valorcarrinho").innerHTML =  `R$ ${valorcarrinho}`;
            choosenacomp.quantidade = 0;
            menuacomps[index].textContent = "Adicionar";
            menuacomps[index].style.backgroundColor = 'antiquewhite';
        }
    }); 
});

