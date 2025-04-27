import {Component, inject, Input} from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {Project} from "../../model/ProjectEntity";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-card-project',
  imports: [TranslateModule, DatePipe],
  templateUrl: './card-project.component.html',
  standalone: true,
  styleUrl: './card-project.component.css'
})
export class CardProjectComponent {
  @Input() project!: Project;
  @Input() isCentered = false;
  private translate = inject(TranslateService);
}
