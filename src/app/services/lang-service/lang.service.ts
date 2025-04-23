import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['fr', 'en']);
    this.translate.setDefaultLang('fr');
    const saved = localStorage.getItem('lang');
    this.translate.use(saved || 'fr');
  }

  switchLang() {
    const current = this.translate.currentLang;
    const next = current === 'fr' ? 'en' : 'fr';
    this.translate.use(next);
    localStorage.setItem('lang', next);
  }

  get currentLang(): string {
    return this.translate.currentLang;
  }
}
