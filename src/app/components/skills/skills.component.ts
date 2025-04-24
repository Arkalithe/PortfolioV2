import {Component, inject, signal} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {CardSkillsComponent} from "../card-skills/card-skills.component";
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'section[app-skills]',
  imports: [
    NgOptimizedImage,
    CardSkillsComponent,
    TranslateModule
  ],
  templateUrl: './skills.component.html',
  standalone: true,
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  private translate = inject(TranslateService);
  skillGroups = signal<{
    category: string;
    skills: { name: string; icon: string; level: number }[];
  }[]>([
    {
      category: 'Languages',
      skills: [
        { name: 'Html', icon: 'html-5.svg', level: 3 },
        { name: 'Css', icon: 'css.svg', level: 3 },

        { name: 'TypeScript', icon: 'typescript.svg', level: 3 },
        { name: 'JavaScript', icon: 'javascript.svg', level: 3 },
        { name: 'Java', icon: 'java.svg', level: 2 },
        { name: 'PHP', icon: 'php.svg', level: 1 },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'Angular', icon: 'angular.svg', level: 3 },
        { name: 'React', icon: 'react.svg', level: 2 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'node-js.svg', level: 3 },
        { name: 'Spring Boot', icon: 'spring.svg', level: 3 },
        { name: 'Express.js', icon: 'express.svg', level: 2 },
        { name: 'Symfony.js', icon: 'symfony.svg', level: 1 },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', icon: 'git.svg', level: 3 },
        { name: 'Docker', icon: 'docker.svg', level: 2 },
        { name: 'Figma', icon: 'figma.svg', level: 2 },
      ],
    }
  ]);
}
