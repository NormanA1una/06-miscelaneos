import { Component } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
    `
      .alert-info {
        background-color: lightblue !important;
      }

      .alert-danger {
        background-color: lightcoral !important;
      }

      .alert-done {
        background-color: lightgreen !important;
      }

      .text-danger {
        color: red;
      }

      .text-info {
        color: blue;
      }
    `,
  ],
})
export class ClasesComponent {
  alerta: string = 'alert-danger';
  loading: boolean = false;

  propiedades = {
    danger: false,
  };

  ejecutar() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
