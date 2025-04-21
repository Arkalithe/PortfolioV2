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
    const glitchLoop = () => {
      const el = this.host.nativeElement.querySelector('.console-effect') as HTMLElement;
      const text = el?.textContent?.trim();

      if (el && text) {
        this.renderer.setAttribute(el, 'data-glitch', text);
        this.renderer.addClass(el, 'glitch');

        setTimeout(() => {
          this.renderer.removeClass(el, 'glitch');
          this.renderer.removeAttribute(el, 'data-glitch');
        }, 480);

        const next = Math.random() * 4000 + 2000;
        setTimeout(glitchLoop, next);
      }
    };

    setTimeout(glitchLoop, 3000);
  }

}
