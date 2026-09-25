import { Routes } from "@angular/router";
import { FinanceiroPage } from "./financeiro-page/financeiro-page";
import { DashboardFinanceiro } from "./pages/dashboard-financeiro/dashboard-financeiro";
import { ConveniosPage } from "./pages/convenios-page/convenios-page";
import { AssociadosPage } from "./pages/associados-page/associados-page";

export const FinanceiroRoutes: Routes = [
    {
        path: "",
        component: FinanceiroPage,
        children: [
            {
                path: "dashboard",
                component: DashboardFinanceiro
            },
            {
                path: "convenios",
                component: ConveniosPage
            },
            {
                path: "associados",
                component: AssociadosPage
            }

        ]
    },
    
]