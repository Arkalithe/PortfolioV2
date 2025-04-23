import {Component, ElementRef, inject, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'section[app-me]',
  imports: [],
  templateUrl: './me.component.html',
  standalone: true,
  styleUrl: './me.component.css',
  host: {
    class: 'hero',
  }
})
export class MeComponent implements OnInit {
  private host = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);

  ngOnInit(): void {
    this.initConsoleLines();
    this.startGlitchLoop();
  }

  private initConsoleLines(): void {
    const lines = this.host.nativeElement.querySelectorAll('.console-effect p') as NodeListOf<HTMLElement>;

    lines.forEach((line) => {
      this.renderer.addClass(line, 'hidden');
    });

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
