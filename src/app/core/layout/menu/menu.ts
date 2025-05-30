import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

const MODULES = [
  CommonModule,
  MenuModule,
  BadgeModule,
  MenubarModule,
  AvatarModule,
  AvatarGroupModule,
];

@Component({
  selector: 'app-menu',
  imports: [...MODULES],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
      },
      {
        label: 'Carreira',
      },
      {
        label: 'Dicas',
      },
      {
        label: 'Contato',
      },
    ];
  }
}
