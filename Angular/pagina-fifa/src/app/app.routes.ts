import { Routes } from '@angular/router';
import { ListadoDeJugadoresComponent } from './views/listado-de-jugadores/listado-de-jugadores.component';
import { InformacionDeJugadorComponent } from './views/informacion-de-jugador/informacion-de-jugador.component';
import { EditarJugadorComponent } from './views/editar-jugador/editar-jugador.component';
import { CreateComoJugadorComponent } from './views/create-como-jugador/create-como-jugador.component';
import { IniciarSesionComponent } from './views/iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
    {
        path: 'listado-de-jugadores',
        component: ListadoDeJugadoresComponent
    },
    {
        path: 'informacion-de-jugador',
        component: InformacionDeJugadorComponent
    },
    {
        path: 'editar-jugador',
        component: EditarJugadorComponent
    },
    {
        path: 'create-como-jugador',
        component: CreateComoJugadorComponent
    },
    {
        path: 'iniciar-sesion',
        component: IniciarSesionComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: '/home', pathMatch: 'full'
    },

];
