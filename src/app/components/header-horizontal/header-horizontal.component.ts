import {Component, inject} from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {LangService} from "../../services/lang-service/lang.service";

@Component({
  selector: 'nav[app-header-horizontal]',
  imports: [TranslateModule],
  templateUrl: './header-horizontal.component.html',
  standalone: true,
  styleUrl: './header-horizontal.component.css',
  host: {
    'class': 'navbar horizontal'
  }
})
export class HeaderHorizontalComponent {
  private translate = inject(TranslateService);
  public lang = inject(LangService);

  toggle() {
    this.lang.switchLang();
  }
}
