import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderHorizontalComponent } from './components/header-horizontal/header-horizontal.component';
import { HeaderVerticalComponent } from './components/header-vertical/header-vertical.component';
import { HeaderToogleComponent } from './components/header-toogle/header-toogle.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderToogleComponent, HeaderVerticalComponent, HeaderHorizontalComponent, FooterComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  isVertical = signal(false);

  onHeaderToggle(mode: boolean) {
    this.isVertical.set(mode);
  }


}
