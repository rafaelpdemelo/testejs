let listaOriginal = document.querySelector('ul.mt-4');
var novaLista = document.createElement('li');
var novoA = document.createElement("a");
var novaDiv = document.createElement("div");
var novoSpan = document.createElement("div");
var novoI = document.createElement("i");


listaOriginal.appendChild(novaLista);
novaLista.classList.add("mt-4", "nav-item-simulados");
novaLista.appendChild(novoA);
novoA.classList.add("nav-link");
novoA.href = "https://estuda.com"
novoSpan.textContent = 'Simulados'
novoA.appendChild(novaDiv);
novoA.appendChild(novoSpan);
novoSpan.classList.add("ml-2.5");
novaDiv.classList.add("flex-none", "w-5", "h-5");
novaDiv.appendChild(novoI);
novoI.setAttribute('data-feather', 'check-square');
