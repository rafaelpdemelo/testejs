let listaOriginal = document.querySelector('ul.mt-4')
var novaLista = document.createElement('li')
var novoA = document.createElement('a')
var novoSpan = document.createElement('span')
novoSpan.textContent = 'Nosso Site'
listaOriginal.appendChild(novaLista)
novaLista.appendChild(novoA)
novoA.appendChild(novoSpan)
novoA.classList.add('nav-link')
novoA.href = 'https://matematicanoplural.com.br'
novaLista.classList.add('mt-4', 'nav-item-site')
