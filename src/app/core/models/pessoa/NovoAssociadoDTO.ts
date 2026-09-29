import { Banco } from "../cadastro/Banco";
import { Estado } from "../cadastro/Estado";
import { EstadoCivil } from "../cadastro/EstadoCivil";
import { Sexo } from "../cadastro/Sexo";
import { Telefone } from "../cadastro/Telefone";
import { TipoPessoa } from "../cadastro/TipoPessoa";

export interface NovoAssociadoDTO{
    id: number,
    dataCadastro: Date,
    foto: string,
    cpf: string,
    nome: string,
    nomeGuerra: string,
    dataNascimento: Date,
    sexo: Sexo,
    estadoCivil: EstadoCivil,
    email: string,
    rg: string,
    matricula: string,
    naturalidade: string,
    tipoPessoa: TipoPessoa,
    cep: string,
    logradouro: string,
    numero: string,
    complemento: string,
    estado: Estado,
    cidade: string,
    bairro: string,
    telefones: Telefone[],
    banco: Banco,
    tipoConta: string

}