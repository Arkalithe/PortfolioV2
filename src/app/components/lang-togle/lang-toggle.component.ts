import { Component } from '@angular/core';
import {LangService} from "../../services/lang-service/lang.service";

@Component({
  selector: 'app-lang-toggle',
  imports: [],
  templateUrl: './lang-toggle.component.html',
  standalone: true,
  styleUrl: './lang-toggle.component.css'
})
export class LangToggleComponent {

  constructor(public lang: LangService) {}

  toggle() {
    this.lang.switchLang();
  }
}
