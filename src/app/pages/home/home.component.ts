import { Component } from '@angular/core';
import {MeComponent} from "../../components/me/me.component";
import {AboutComponent} from "../../components/about/about.component";
import {ProjectComponent} from "../../components/project/project.component";
import {SkillsComponent} from "../../components/skills/skills.component";

@Component({
  selector: 'app-home',
    imports: [
        MeComponent,
        AboutComponent,
        ProjectComponent,
        SkillsComponent
    ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
