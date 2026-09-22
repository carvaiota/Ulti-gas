class veiculo {
  #idveiculo;
  #placa;
  #idcliente;
  #cor;
  #modelo;
  #ano_modelo;
  #chassi;
  #tipo_combustivel;

  constructor(
    idveiculo,
    placa,
    idcliente,
    cor,
    modelo,
    ano_modelo,
    chassi,
    tipo_combustivel,
  ) {
    // validando a placa, deve coonter exatamnete 7 caracteres 
    if (!placa || String(placa).trim().length !== 7){
        throw new Error ("A placa teve ter 7 caracteres")
    }
    // validando o ano_modelo,  deve conter exatamente 4 caracter e todas numericos
    if (!ano_modelo || String(ano_modelo).trim().length !== 4 ){
        throw new Error ("O ano deve conter quatro caracteres NUMERICOS!!")
    }
    if (!ano_modelo || /^\d{11}$/.test (String (ano_modelo).trim()))

    if (chassi && String(chassi).trim().length !== 17){
        throw new Error ("O chassi deve conter 17 caracteres")
    }
    this.#idveiculo = idveiculo;
    this.#placa = placa;
    this.#idcliente = idcliente;
    this.#cor = cor;
    this.#modelo = modelo;
    this.#ano_modelo = ano_modelo;
    this.#chassi = chassi;
    this.#tipo_combustivel = tipo_combustivel;
  }

  get idveiculo() {
    return this.#idveiculo;
  }

  get placa() {
    return this.#placa;
  }

  get idcliente() {
    return this.#idcliente;
  }

  get cor() {
    return this.#cor;
  }

  set cor(novaCor) {
    if (!novaCor || novaCor.trim() == "") {
      throw new Error("A cor nao pode estar vazia");
    }
    if (novaCor == this.#cor) {
      throw new Error("A cor nao pode ser igual");
    }
    this.#cor = novaCor;
  }
  get modelo() {
    return this.#modelo;
  }
  get ano_modelo() {
    return this.#ano_modelo;
  }
  get chassi() {
    return this.#chassi;
  }
  get tipo_combustivel() {
    return this.#tipo_combustivel;
  }
}
export default veiculo;
