import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { Footer } from '../footer/footer';
import { RouterModule } from '@angular/router';

const COMPONENTS = [Menu, Footer];
const MODULES = [RouterModule];

@Component({
  selector: 'app-main',
  imports: [...COMPONENTS, ...MODULES],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
