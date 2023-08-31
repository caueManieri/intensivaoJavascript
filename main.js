// const nomeProduto = 'Casaco branco';  variável constante, não posso mudar o nome
// const marca = "Zara";
// const preco = 70;
// const nomeArquivoImagem = "product-1.jpg"

// alert("Leal é gay");

// const produto1 = {     //variável constante
//     id: 1,    
//     nome: "casaco branco",
//     marca: "Zara",
//     preco: 70,
//     nomeArquivoImagem: 'product-1.jpg',
// };
// const produto2 = {     
//     id: 2,   
//     nome: "Sobretudo feminino",
//     marca: "Zara",
//     preco: 110,
//     nomeArquivoImagem: 'product-2.jpg',
// };

// const catalogo [produto1, produto2]     fazendo 1 por 1 e colocando em lista
//const cartaoProduto = `<div id="card-produto-1">
//{* <img src="./assets/img/${produto2.nomeArquivoImagem}" alt="Produto 1 do magazine Cauê"
//style="height: 200px;"
///>
/* <p>${produto2.marca}</p>
<p>${produto2.nome}</p>
<p>R$${produto2.preco},00</p>
<button>Adicionar ao carrinho</button>
</div>`; */

const catalogo = [{ 
    id: 1, 
    marca: 'Zara', 
    nome: 'Camisa Larga com Bolsos', 
    preco: 70, 
    imagem: 'product-1.jpg', 
    feminino: false, 
}, 
{ 
    id: 2, 
    marca: 'Zara', 
    nome: 'Casaco Reto com Lã', 
    preco: 85, 
    imagem: 'product-2.jpg', 
    feminino: true, 
}, 
{ 
    id: 3, 
    marca: 'Zara', 
    nome: 'Jaqueta com Efeito Camurça', 
    preco: 60, 
    imagem: 'product-3.jpg', 
    feminino: false, 
}, 
{ 
    id: 4, 
    marca: 'Zara', 
    nome: 'Sobretudo em Mescla de Lã', 
    preco: 160, 
    imagem: 'product-4.jpg', 
    feminino: false, 
}, 
{ 
    id: 5, 
    marca: 'Zara', 
    nome: 'Camisa Larga Acolchoada de Veludo Cotelê', 
    preco: 110, 
    imagem: 'product-5.jpg',
    feminino: false, 
}, 
{ 
    id: 6, 
    marca: 'Zara', 
    nome: 'Casaco de Lã com Botões', 
    preco: 170, 
    imagem: 'product-6.jpg', 
    feminino: true, 
}, 
{ 
    id: 7, 
    marca: 'Zara', 
    nome: 'Casaco com Botões',
    preco: 75, 
    imagem: 'product-7.jpg', 
    feminino: true, 
},
{
    id: 8, 
    marca: 'Zara', 
    nome: 'Colete Comprido com Cinto', 
    preco: 88, 
    imagem: 'product-8.jpg', 
    feminino: true, 
}]

for (const produtoCatalogo of catalogo){
    const cartaoProduto = `<div id="card-produto-1">
    <img src="./assets/img/${produtoCatalogo.imagem}" alt="Produto 1 do magazine Cauê"
    style="height: 200px;"
    />
    <p>${produtoCatalogo.marca}</p>
    <p>${produtoCatalogo.nome}</p>
    <p>R$${produtoCatalogo.preco},00</p>
    <button>Adicionar ao carrinho</button>
    </div>`; 
    document.getElementById('container-produto').innerHTML += cartaoProduto //Preencher com a variável

}


//document.getElementById('container-produto')  //recuperar um elemento a partir do id dele (escrito no html)

