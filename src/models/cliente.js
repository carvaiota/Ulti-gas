class cliente {
  #idcliente;
  #cpf;
  #nome;
  #qntde_pontos;
  #idusuario;

  constructor(idcliente, cpf, nome, qntde_pontos, idusuario) {
    if (!cpf || String(cpf).trim().length !== 11) {
      throw new Error("o CPF deve conter exatamente 11 caracteres NUMERICOS!!")
    }
    if (!cpf || !/^\d{11}$/.test (String(cpf).trim())){
    throw new Error("O CPF deve conter exatamente 11 caracteres NUMERICOS!!")
}
    this.#idcliente = idcliente;
    this.#cpf = cpf;
    this.#nome = nome;
    this.#qntde_pontos = qntde_pontos;
    this.#idusuario = idusuario;
  }

  get idcliente() {
    return this.#idcliente;
  }
  get cpf() {
    return this.#cpf;
  }
  get nome() {
    return this.#nome;
  }
  get qntde_pontos() {
    return this.#qntde_pontos;
  }

  adicionaPontos(qntd) {
    if (qntd <= 0) {
      throw new Error(" A quantidade de pontos deve ser maior que 0");
    }
    this.#qntde_pontos += qntd;
  }

  resgatarPontos(qntd) {
    if (qntd <= 0) {
      throw new Error("A quantidade de pontos deve ser maior que 0");
    }
    if (qntd > this.#qntde_pontos) {
      throw new Error("Saldo insuficiente para realizar o resgate");
    }
    this.#qntde_pontos -= qntd;
  }
  get idusuario() {
    return this.#idusuario;
  }
}

export default cliente;
