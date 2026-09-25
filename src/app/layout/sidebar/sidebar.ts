import { Component, signal, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { DrawerModule } from 'primeng/drawer';
import { RouterLink } from '@angular/router';

export interface MenuItem {
  label: string;
  icon: string;
  active?: boolean;
  badge?: number;
  rota?: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, AvatarModule, DrawerModule, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  isMobile = input<boolean>(false);
  isCollapsed = input<boolean>(false);
  mobileMenuOpen = input<boolean>(false);

  toggleCollapse = output<void>();
  mobileMenuOpenChange = output<boolean>();

  menuItems = signal<MenuItem[]>([
    { label: 'Home', icon: 'pi pi-home', active: true, rota: 'home'},
    { label: 'Pessoas', icon: 'pi pi-users', badge: 3, rota: 'pessoas'},
    { label: 'Financeiro', icon: 'pi pi-dollar', rota: 'financeiro'},
    { label: 'Juridico', icon: 'pi pi-building-columns', rota: 'juridico' },
    { label: 'Notifications', icon: 'pi pi-bell' },
    { label: 'Settings', icon: 'pi pi-cog' }
  ]);
}