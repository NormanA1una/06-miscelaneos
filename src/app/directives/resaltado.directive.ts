import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective {
  constructor(private el: ElementRef) {}

  @Input('appResaltado')
  nuevoColor?: string;

  @HostListener('mouseenter')
  mouseHover() {
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave')
  mouseOut() {
    this.resaltar(null);
  }

  private resaltar(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
