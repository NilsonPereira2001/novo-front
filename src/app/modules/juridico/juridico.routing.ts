import { Routes } from "@angular/router";
import { JuridicoPage } from "./juridico-page/juridico-page";
import { DashboardPage } from "./pages/dashboard-page/dashboard-page";

export const JuridicoRoutes: Routes = [
    {
        path: "",
        component: JuridicoPage,
        children: [
            {
                path: "dashboard",
                component: DashboardPage
            }
        ]
    }
]