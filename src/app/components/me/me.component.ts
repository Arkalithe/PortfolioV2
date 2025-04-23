import {
  Component,
  effect,
  ElementRef,
  inject, Injector,
  OnDestroy,
  OnInit,
  Renderer2,
  runInInjectionContext,
  signal
} from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {Subscription} from "rxjs";

@Component({
  selector: 'section[app-me]',
  imports: [TranslateModule],
  templateUrl: './me.component.html',
  standalone: true,
  styleUrl: './me.component.css',
  host: {
    class: 'hero',
  }
})
export class MeComponent implements OnInit {
  private injector = inject(Injector);
  private translate = inject(TranslateService);
  private host = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);

  consoleLines = signal<string[]>([]);

  ngOnInit(): void {
    this.loadConsoleLines();

    this.translate.onLangChange.subscribe(() => {
      this.loadConsoleLines();
    });

    this.startGlitchLoop();
  }

  private loadConsoleLines(): void {
    this.translate.get('hero.console').subscribe((lines: string[]) => {
      this.consoleLines.set([...lines]);
        this.initConsoleLines();
    });
  }

  private initConsoleLines(): void {
    const consoleContainer = this.host.nativeElement.querySelector('.console-effect') as HTMLElement;

    consoleContainer.innerHTML = '';

    this.consoleLines().forEach(line => {
      const p = this.renderer.createElement('p');
      const text = this.renderer.createText(line);
      this.renderer.appendChild(p, text);
      this.renderer.addClass(p, 'hidden');
      this.renderer.appendChild(consoleContainer, p);
    });

    const lines = consoleContainer.querySelectorAll('p');

    lines.forEach((line, index) => {
      const delay = index * 2000;
      setTimeout(() => {
        this.renderer.removeClass(line, 'hidden');
        this.renderer.addClass(line, 'typing');

        setTimeout(() => {
          this.renderer.removeClass(line, 'typing');
          this.renderer.addClass(line, 'typing-done');
        }, 1800);
      }, delay);
    });
  }

  private startGlitchLoop(): void {
    const consoleEl = this.host.nativeElement.querySelector('.console-effect') as HTMLElement;

    const glitch = () => {
      const text = consoleEl?.textContent?.trim();
      if (!consoleEl || !text) return;

      this.renderer.setAttribute(consoleEl, 'data-glitch', text);
      this.renderer.addClass(consoleEl, 'glitch');

      setTimeout(() => {
        this.renderer.removeClass(consoleEl, 'glitch');
        this.renderer.removeAttribute(consoleEl, 'data-glitch');
      }, 480);

      const next = Math.random() * 4000 + 2000;
      setTimeout(glitch, next);
    };

    setTimeout(glitch, 3000);
  }

}
