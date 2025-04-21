import { Component } from '@angular/core';
import {MeComponent} from "../../components/me/me.component";

@Component({
  selector: 'app-home',
    imports: [
        MeComponent
    ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
