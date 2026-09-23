import { Routes } from "@angular/router";
import { PessoasPage } from "./pessoas-page/pessoas-page";
import { NovoSocio } from "./novo-socio/novo-socio";

export const PessoaRoutes: Routes = [
    {
        path: "",
        component: PessoasPage
    },
    {
        path: "novo/socio",
        component: NovoSocio
    }
]