import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderHorizontalComponent } from './components/header-horizontal/header-horizontal.component';
import {LangToggleComponent} from "./components/lang-togle/lang-toggle.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderHorizontalComponent, FooterComponent, LangToggleComponent],
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
