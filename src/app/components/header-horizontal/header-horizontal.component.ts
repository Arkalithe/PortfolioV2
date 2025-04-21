import { Component } from '@angular/core';

@Component({
  selector: 'nav[app-header-horizontal]',
  imports: [],
  templateUrl: './header-horizontal.component.html',
  standalone: true,
  styleUrl: './header-horizontal.component.css',
  host: {
    'class': 'navbar horizontal'
  }
})
export class HeaderHorizontalComponent {

}
