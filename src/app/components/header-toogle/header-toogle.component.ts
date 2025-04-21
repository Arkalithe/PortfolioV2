import {Component, EventEmitter, Output, signal} from '@angular/core';

@Component({
  selector: 'app-header-toogle',
  imports: [],
  templateUrl: './header-toogle.component.html',
  standalone: true,
  styleUrl: './header-toogle.component.css'
})
export class HeaderToogleComponent {
  isVertical = signal(false);

  @Output() headerModeChanged = new EventEmitter<boolean>();

  toggle() {
    this.isVertical.update(v => !v);
    this.headerModeChanged.emit(this.isVertical());
  }
}
