import { Estado } from "../cadastro/Estado";
import { TipoVinculo } from "../cadastro/TipoVinculo";

export interface Convenio{
    id: number,
    fixo: boolean,
    relancaPendencia: boolean,
    nativo: boolean,
    associadosAntigos: boolean,
    tipo: string,
    cpfCnpj: string,
    nome: string,
    nomeFantasia: string,
    publico: TipoVinculo,
    valor: number,
    cep: string,
    logradouro: string,
    numero: string,
    complemento: string,
    estado: Estado,
    cidade: string,
    bairro: string,
    dataCriacao: Date,
    dataExclusao: Date,
    status: string
}