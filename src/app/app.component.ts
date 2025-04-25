import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderHorizontalComponent } from './components/header-horizontal/header-horizontal.component';


@Component({
  selector: 'app-root',
    imports: [RouterOutlet, HeaderHorizontalComponent, FooterComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';


}
