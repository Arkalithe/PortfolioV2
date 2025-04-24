import {Component, inject} from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {LangToggleComponent} from "../lang-togle/lang-toggle.component";

@Component({
  selector: 'nav[app-header-horizontal]',
  imports: [TranslateModule, LangToggleComponent],
  templateUrl: './header-horizontal.component.html',
  standalone: true,
  styleUrl: './header-horizontal.component.css',
  host: {
    'class': 'navbar horizontal'
  }
})
export class HeaderHorizontalComponent {
  private translate = inject(TranslateService);
}
