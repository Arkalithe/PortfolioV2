import { Component } from '@angular/core';

@Component({
  selector: 'nav[app-header-vertical]',
  imports: [],
  templateUrl: './header-vertical.component.html',
  standalone: true,
  styleUrl: './header-vertical.component.css',
  host: {
    'class': 'navbar vertical'
  }
})
export class HeaderVerticalComponent {

}
