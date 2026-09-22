class produto {
  #idproduto;
  #preco_litro;
  #nome_Produto;
  constructor(idproduto, preco_litro, nome_produto) {
    this.#idproduto = idproduto;
    this.#preco_litro = preco_litro;
    this.#nome_Produto = nome_produto;
  }

  get idproduto() {
    return this.#idproduto;
  }
  get preco_litro() {
    return this.#preco_litro;
  }
  atualizarPreco(novoPreco) {
    if (novoPreco <= 0) {
      throw new Error("O preço deve ser maior que 0");
    }
    this.#preco_litro = novoPreco;
  }

  get nome_Produto() {
    return this.#nome_Produto;
  }

  set nome_produto(value) {
    this.#nome_Produto = value;
  }
}

export default produto;
