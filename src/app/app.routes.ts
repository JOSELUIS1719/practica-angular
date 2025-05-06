import { Routes } from '@angular/router';
import { DbzComponent } from './pages/dbz/dbz.component';
import { CoctelesComponent } from './pages/cocteles/cocteles.component';
import { PokemonesComponent } from './pages/pokemones/pokemones.component';
import { error } from 'console';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { RickandmortyComponent } from './pages/rickandmorty/RickandmortyComponent';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'dbz', component:DbzComponent},
    {path:'cocteles', component:CoctelesComponent},
    {path:'pokemones', component:PokemonesComponent},
    {path:'rickandmorty', component:RickandmortyComponent},
    {path: 'miapi', loadChildren: () => import('./pages/mi-api/miapi.routers.module').then(m => m.MiapiRoutingModule)}
];
