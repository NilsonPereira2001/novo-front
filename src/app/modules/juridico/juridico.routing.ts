import { Routes } from "@angular/router";
import { JuridicoPage } from "./juridico-page/juridico-page";
import { DashboardPage } from "./pages/dashboard-page/dashboard-page";
import { PessoasPage } from "../pessoas/pessoas-page/pessoas-page";
import { Pessoas } from "./pages/pessoas/pessoas";
import { Processos } from "./pages/processos/processos";
import { FichaProcesso } from "./pages/ficha-processo/ficha-processo";

export const JuridicoRoutes: Routes = [
    {
        path: "",
        component: JuridicoPage,
        children: [
            {
                path: "dashboard",
                component: DashboardPage
            },
            {
                path: "pessoas",
                component: Pessoas
            },
            {
                path: "processos",
                component: Processos
            },
            {
                path: "processos/:id",
                component: FichaProcesso
            }
        ]
    }
]