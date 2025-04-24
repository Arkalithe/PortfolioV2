import {Component, effect, input, signal} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";


@Component({
  selector: 'app-card-skills',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './card-skills.component.html',
  standalone: true,
  styleUrl: './card-skills.component.css'
})
export class CardSkillsComponent {
  name = input<string>();
  icon = input<string>();
  level = input<number>(0);
  maxLevel = input<number>(5);

  steps = signal<number[]>([]);

  constructor() {
    effect(() => {
      const filled = this.level();
      const max = this.maxLevel();
      this.steps.set(Array.from({ length: max }, (_, i) => i < filled ? 1 : 0));
    });
  }
}
