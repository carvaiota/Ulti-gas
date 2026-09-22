class usuario {
  #senha_hash;
  #idusuario;
  #email;

  constructor(senha_hash, idusuario, email) {
   // validacao do email, caso nao pissua o @, de erro
    if (!email || !email.includes("@")) {
      throw new Error("email invalido");
    }
    this.#senha_hash = senha_hash;
    this.#idusuario = idusuario;
    this.#email = email;
  }

  get senha_hash() {
    return this.#senha_hash;
  }

  get idusuario() {
    return this.#idusuario;
  }

  get email() {
    return this.#email;
  }
  // novo email com mesma validacao do email
  set(novoEmail) {
    if (!novoEmail || !novoEmail.includes("@")) {
      throw new Error("email invalido");
    }
    this.#email = novoEmail;
  }

  atualizarSenha(novaSenha) {
    // validacao de senha igaul a anterior 
    if (novaSenha === this.#senha_hash) {
      throw new Error("a senha deve ser diferente de uma senha ja atilizada");
    }
    // validacao da senha estar preenchida com pelo menos umaa caaracter (colocar validacao de caracter no futuro)
    if (!novaSenha || novaSenha.trim() == "") {
      throw new Error("A nova senha não pode ser vazia");
    }
    this.#senha_hash = novaSenha;
  }
}

export default usuario;
