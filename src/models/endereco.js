class endereco {
  #idendereco;
  #bairro;
  #numero;
  #cep;
  #rua;
  #complemento;
  #idcliente;

  constructor(idendereco, bairro, numero, cep, rua, complemento, idcliente) {
    if (!cep || String(cep).trim().length !== 8) {
      throw new Error("O CEP deve conter exatamente 8 caracteres NUMERICOS!!");
    }
    if(!cpf || /^\d{11}$/.test (String(cep).trim())){
        throw new Error("O CEP deve conter exatamente 8 caracteres NUMERICAS!!")
    }
    
    this.#idendereco = idendereco;
    this.#bairro = bairro;
    this.#numero = numero;
    this.#cep = cep;
    this.#rua = rua;
    this.#complemento = complemento;
    this.#idcliente = idcliente;
  }

  get idendereco() {
    return this.#idendereco;
  }
  get bairro() {
    return this.#bairro;
  }
  get numero() {
    return this.#numero;
  }
  get cep() {
    return this.#cep;
  }
  get rua() {
    return this.#rua;
  }
  get complemento() {
    return this.#complemento;
  }
  get idcliente() {
    return this.#idcliente;
  }
}
