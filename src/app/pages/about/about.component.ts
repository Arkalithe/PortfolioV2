import {Component, computed, signal} from '@angular/core';
import {TimelineEntry} from "../../model/TimelineEntry";


@Component({
  selector: 'section[app-about]',
  imports: [],
  templateUrl: './about.component.html',
  standalone: true,
  styleUrl: './about.component.css'
})
export class AboutComponent {

  timeline = signal<TimelineEntry[]>([
    { year: '2023 -2024', title: 'Developeur Web Web Mobile', description: 'Studi', niveau: 'Titre Pro 5 (bac+2)', type: 'education', position: 80, side: 'right' },
    { year: '2024 - 2025', title: 'Concepteur developpeur d"application', description: 'Human Booster', niveau: 'Titre PRO niveau 6 (bac+3/4)', type: 'education', position: 10, side: 'left' },
    { year: '2025', title: 'Digitech Fusion', description: '4 mois', type: 'experience', position: 10, side: 'left' },
  ]);

}
