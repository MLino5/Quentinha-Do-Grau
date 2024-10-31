function incrementar(produto){
    const contador = document.getElementById(produto);
    let quantidade = parseInt(contador.textContent);
    quantidade++;
    contador.textContent = quantidade;

}

function decrementar(produto){
    const contador = document.getElementById(produto);
    let quantidade = parseInt(contador.textContent);
    if(quantidade > 0){
        quantidade--;
    }
    contador.textContent = quantidade;
}

function contarProdutosSelecionados() {
    const contadores = document.querySelectorAll('[id^="produto"]');
    const produtosSelecionados = {};

    contadores.forEach(contador => {
        const produtoId = contador.id;
        const quantidade = parseInt(contador.textContent);

        if (quantidade > 0) {
            produtosSelecionados[produtoId] = quantidade;
        }
    });

    return produtosSelecionados;
}

function fecharPedido() {
    const produtosSelecionados = contarProdutosSelecionados();
    let totalQuantidade = 0;

    for (const produto in produtosSelecionados) {
        totalQuantidade += produtosSelecionados[produto];
    }

    const total = totalQuantidade *25;
    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

