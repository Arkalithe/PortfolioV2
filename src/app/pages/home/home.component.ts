import { Component } from '@angular/core';
import {MeComponent} from "../../components/me/me.component";
import {AboutComponent} from "../about/about.component";
import {ProjectComponent} from "../project/project.component";

@Component({
  selector: 'app-home',
    imports: [
        MeComponent,
        AboutComponent,
        ProjectComponent
    ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
