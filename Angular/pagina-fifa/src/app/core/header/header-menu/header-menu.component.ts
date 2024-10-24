import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '../../model/menu-item.model';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {
  @Input() menuItems?: MenuItem[];
}
