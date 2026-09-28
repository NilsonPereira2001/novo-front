import { Routes } from "@angular/router";
import { PessoasPage } from "./pessoas-page/pessoas-page";
import { NovoSocio } from "./novo-socio/novo-socio";
import { FichaAssociado } from "./ficha-associado/ficha-associado";

export const PessoaRoutes: Routes = [
    {
        path: "",
        component: PessoasPage
    },
    {
        path: "novo/socio",
        component: NovoSocio
    },
    {
        path: "ficha/:idPessoa",
        component: FichaAssociado
    }
]