import {Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-detail.component.html',
  standalone: true,
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent {
  private route = inject(ActivatedRoute);
  slug = this.route.snapshot.paramMap.get('slug');
}
