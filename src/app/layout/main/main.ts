import { Component, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, Sidebar, Header, RouterOutlet],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class MainLayoutComponent {
  private platformId = inject(PLATFORM_ID);

  isMobile = signal<boolean>(false);
  isCollapsed = signal<boolean>(false);
  mobileMenuOpen = signal<boolean>(false);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const mql = window.matchMedia('(max-width: 1023px)');
      this.isMobile.set(mql.matches);

      mql.addEventListener('change', (e) => {
        this.isMobile.set(e.matches);
        if (!e.matches) {
          this.mobileMenuOpen.set(false);
        }
      });
    }
  }

  toggleCollapse() {
    this.isCollapsed.update(v => !v);
  }
}

