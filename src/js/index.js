const listaAbas = document.querySelectorAll('.aba')
const telaInformacao = document.querySelectorAll('.informacao-aba')

listaAbas.forEach(aba => {
    aba.addEventListener('click', () => {
        document.querySelector('.aberta').classList.remove('aberta')

        const idAbaSelecionada = aba.attributes.id.value
        document.getElementById(`informacao-${idAbaSelecionada}`).classList.add('aberta')

        document.querySelector('.ativa').classList.remove('ativa')

        document.getElementById(idAbaSelecionada).classList.add('ativa')
    })
})

const idInformacao = `informacao-${aba.id}`;