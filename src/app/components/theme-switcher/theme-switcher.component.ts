import { NgClass, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { THEMES } from '../../constants/theme';
import { Theme, Themes } from '../../interfaces/theme';
import { ButtonHoverEffectDirective } from '../../directives/button-hover-effect.directive';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [UpperCasePipe, NgClass, ButtonHoverEffectDirective],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
})
export class ThemeSwitcherComponent {
  themes: Themes = THEMES;
  currentTheme: Theme = this.themes.LIGHT;

  buttons = [
    {
      title: THEMES.LIGHT,
      ngClass: () => this.getNgClass(THEMES.LIGHT),
      click: this.changeTheme.bind(this),
    },
    {
      title: THEMES.DARK,
      ngClass: () => this.getNgClass(THEMES.DARK),
      click: this.changeTheme.bind(this),
    },
  ];

  changeTheme(nextTheme: Theme) {
    if (this.currentTheme === nextTheme) return;

    this.currentTheme = nextTheme;
    document.body.setAttribute('theme', this.currentTheme);
  }

  getNgClass(theme: Theme) {
    return { activeButton: this.currentTheme === theme };
  }
}
