import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ListApiComponent } from "./list-api/list-api.component";

const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ListApiComponent, pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MiapiRoutingModule { }
