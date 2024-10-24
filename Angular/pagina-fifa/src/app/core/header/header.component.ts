import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../model/menu-item.model';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderMenuComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
    {text: 'listado de jugadores', route: '/listado-de-jugadores'},
    {text: 'informacion de jugador', route: '/informacion-de-jugador'},
    {text: 'editar jugador', route: '/editar-jugador'},
    {text: 'create como jugador', route: '/create-como-jugador' },
    {text: 'iniciar sesion', route: '/iniciar-sesion'}
  ]
}
