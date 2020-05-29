import { Cliente } from '../models/cliente';

export class Sessao{
  public static setCliente(cliente:Cliente):void{
    localStorage.setItem("cliente", JSON.stringify(cliente))
  }

  public static getCliente():Cliente{
    if(!localStorage.getItem("cliente")) return null
    let cli:Cliente
    cli = JSON.parse(localStorage.getItem("cliente"))
    return cli
  }
}
