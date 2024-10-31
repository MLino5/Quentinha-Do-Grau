function incrementar(produto) {
    const contador = document.getElementById(produto);
    let quantidade = parseInt(contador.textContent);
    quantidade++;
    contador.textContent = quantidade;
}

function decrementar(produto) {
    const contador = document.getElementById(produto);
    let quantidade = parseInt(contador.textContent)
    if(quantidade > 0) {
        quantidade--;
    }
    contador.textContent = quantidade;
}

