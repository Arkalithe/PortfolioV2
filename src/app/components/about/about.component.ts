import {Component, computed, inject, signal} from '@angular/core';
import {TimelineEntry} from "../../model/TimelineEntry";
import {TranslateModule, TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'section[app-about]',
  imports: [TranslateModule],
  templateUrl: './about.component.html',
  standalone: true,
  styleUrl: './about.component.css'
})
export class AboutComponent {
  private translate = inject(TranslateService);
  timeline = signal<TimelineEntry[]>([
    { year: '2023-2024', key: 'studipro', type: 'education', position: 80, side: 'right' },
    { year: '2024-2025', key: 'hb', type: 'education', position: 40, side: 'left' },
    { year: '2025', key: 'digitech', type: 'experience', position: 10, side: 'right' }
  ]);

}
