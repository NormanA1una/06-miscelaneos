import { Component } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p class="mt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, pariatur.
      Distinctio corrupti laborum nostrum, repellat iure est natus ipsum aliquid
      praesentium eaque placeat atque porro aut. Voluptate blanditiis modi
      exercitationem. DESDE CSS COMPONENT
    </p>
  `,
  styles: [
    `
      p {
        color: red;
        font-size: 20px;
      }
    `,
  ],
})
export class CssComponent {}
