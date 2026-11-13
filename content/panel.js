if(document.getElementById("pricehunter"))
    throw "";

const panel=document.createElement("div");

panel.id="pricehunter";

panel.innerHTML=`

<div id="ph-header">

<div id="ph-title">

💰 PriceHunter

</div>

<button id="ph-close">

✕

</button>

</div>

<div id="ph-search">

<input

id="ph-input"

placeholder="Pesquisar produto...">

<button id="ph-btn">

Buscar

</button>

</div>

<div id="ph-content">

<div class="ph-card">

<h3>

Bem-vindo ao PriceHunter

</h3>

<div class="ph-store">

A extensão foi carregada com sucesso.

</div>

</div>

</div>

`;

document.body.append(panel);

document
.getElementById("ph-close")
.onclick=()=>{

panel.remove();

};

document
.getElementById("ph-btn")
.onclick=()=>{

const texto=

document
.getElementById("ph-input")
.value;

adicionarCard(

texto,

"Pesquisando...",

"PriceHunter"

);

};

function adicionarCard(

titulo,

preco,

loja

){

const area=

document
.getElementById("ph-content");

area.innerHTML+=`

<div class="ph-card">

<h3>

${titulo}

</h3>

<div class="ph-price">

${preco}

</div>

<div class="ph-store">

${loja}

</div>

<a

class="ph-button"

href="#">

Abrir

</a>

</div>

`;

}