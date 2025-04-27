import {AfterViewInit, Component, computed, ElementRef, signal, ViewChild} from '@angular/core';
import {CardProjectComponent} from "../card-project/card-project.component";
import {Project} from "../../model/ProjectEntity";

@Component({
  selector: 'section[app-project]',
  standalone: true,
  imports: [
    CardProjectComponent,
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  allProjects  = signal<Project[]>([
    {
      id: 1,
      title: 'projects.portfolio.title',
      description: 'projects.portfolio.description',
      image: 'assets/img/portfolio.png',
      tags: ['Angular/Ts', 'CSS',],
      link: 'https://vigneron-tristan.github.io/PortfolioV2/',
      type: 'perso',
      year: new Date('2025-04-24')
    },
    {
      id: 2,
      title: 'projects.garage.title',
      description: 'projects.garage.description',
      image: 'assets/img/test.png',
      tags: ['Formation', 'React/JS', "JWT", 'PhP/Symfony', "Bootstrap", 'API Platform', ],
      link: '',
      type: 'pro',
      year: new Date('2024-03-27')
    },
    {
      id: 3,
      title: 'projects.game.title',
      description: 'projects.game.description',
      image: 'assets/img/game.png',
      tags: ['Canvas', 'JS'],
      link: 'https://vigneron-tristan.github.io/game.github.io/',
      type: 'perso',
      year: new Date('2024-02-21')
    },
    {
      id: 4,
      title: 'projects.borne.title',
      description: 'projects.borne.description',
      image: 'assets/img/game.png',
      tags: ['Formation', 'Angular/TS', 'Spring-Boot/Java', "Google Map API","CSS", "JWT"],
      link: 'https://electricbusiness.netlify.app',
      type: 'pro',
      year: new Date('2025-04-13')
    },
    {
      id: 5,
      title: 'projects.localIa.title',
      description: 'projects.localIa.description',
      image: 'assets/img/game.png',
      tags: ['Entreprise', 'JS', 'NodeJs', "OpenAI API", ],
      link: '',
      type: 'pro',
      year: new Date('2025-04-14')
    },
    {
      id: 6,
      title: 'projects.dice.title',
      description: 'projects.dice.description',
      image: 'assets/img/game.png',
      tags: ['HTML', 'CSS', 'JS'],
      link: 'https://100rollgame.netlify.app/',
      type: 'perso',
      year: new Date('2024-02-21')
    },
  ]);

  proProjects = computed(() =>
      this.allProjects()
          .filter(p => p.type === 'pro')
          .sort((a, b) => b.year.getTime() - a.year.getTime())
  );

  personalProjects = computed(() =>
      this.allProjects()
          .filter(p => p.type === 'perso')
          .sort((a, b) => b.year.getTime() - a.year.getTime())
  );
}
