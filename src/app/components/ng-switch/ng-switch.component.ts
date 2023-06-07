import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
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

      .alert-warning {
        background-color: lightyellow !important;
      }
    `,
  ],
})
export class NgSwitchComponent {
  alerta: string = 'info';
}
