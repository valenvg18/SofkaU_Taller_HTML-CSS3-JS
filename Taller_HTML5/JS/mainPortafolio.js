const grid = new Muuri ('.grid', {
    layout: {
        rounding: false
    } 
})

window.addEventListener('load', () => {
    grid.refreshItems().layout()
    // document.getElementById('grid').classList.add('enlaces-cargados')

    const enlacesCategorias = document.querySelectorAll('#categoria a')
    enlacesCategorias.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault()
            enlacesCategorias.forEach((cliqueado) => cliqueado.classList.remove('activo'))
            evento.target.classList.add('activo')

            const categoria = evento.target.innerHTML.toLowerCase() //obteniendo el texto que estamos seleccionando
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`) //mostrar elemento de solo esa categoría
        })
    })
})

