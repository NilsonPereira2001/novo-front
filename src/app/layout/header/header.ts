import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  title = input<string>('Dashboard');
  isMobile = input<boolean>(false);
  isCollapsed = input<boolean>(false);

  toggleCollapse = output<void>();
  openMobileMenu = output<void>();
}