import { Banco } from "../cadastro/Banco";
import { Estado } from "../cadastro/Estado";
import { EstadoCivil } from "../cadastro/EstadoCivil";
import { FormaPagamento } from "../cadastro/FormaPagamento";
import { Graduacao } from "../cadastro/Graduacao";
import { Instituicao } from "../cadastro/Instituicao";
import { Quadro } from "../cadastro/Quadro";
import { Sexo } from "../cadastro/Sexo";
import { Telefone } from "../cadastro/Telefone";
import { TipoPessoa } from "../cadastro/TipoPessoa";
import { TipoPix } from "../cadastro/TipoPix";
import { TipoSocio } from "../cadastro/TipoSocio";
import { TipoVinculo } from "../cadastro/TipoVinculo";
import { Unidade } from "../cadastro/Unidade";
import { EmpresaConveniada } from "../empresas/EmpresaConveniada";
import { Convenio } from "../financeiro/Convenio";

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
    agencia: string,
    numeroConta: string,
    tipoPix: TipoPix,
    chavePix: string,
    formaPagamento: FormaPagamento,
    tipoVinculo: TipoVinculo,
    instituicao: Instituicao,
    unidade: Unidade,
    graduacao: Graduacao,
    quadro: Quadro,
    dataIncorporacao: Date,
    tipoSocio: TipoSocio,
    convenios: Convenio[],
    empresaConveniada: EmpresaConveniada

}