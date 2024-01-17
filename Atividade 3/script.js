function alterarQuantidade(produtoId, quantidade, precoUnitario) {
    const quantidadeElement = document.getElementById(`quantidade-produto${produtoId}`);
    let valorAtual = parseInt(quantidadeElement.innerText);

    valorAtual = Math.max(0, valorAtual + quantidade);

    quantidadeElement.innerText = valorAtual;

    const valorTotalElement = document.getElementById(`valor-total-produto${produtoId}`);
    const valorTotal = valorAtual * precoUnitario;
    valorTotalElement.innerText = `R$ ${valorTotal.toFixed(2)}`;
}