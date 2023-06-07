import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p class="mt-4" [style.fontSize.px]="tamanio">
      Hola mundo, esta es una etiqueta!
    </p>

    <div class="flex space-x-4">
      <button (click)="tamanio = tamanio + 5" mat-raised-button color="primary">
        <i class="fa-solid fa-plus"></i>
      </button>

      <button (click)="tamanio = tamanio - 5" mat-raised-button color="primary">
        <i class="fa-solid fa-minus"></i>
      </button>
    </div>
  `,
  styles: [],
})
export class NgStyleComponent {
  tamanio: number = 10;
}
