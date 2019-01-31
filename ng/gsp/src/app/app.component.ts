import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'gsp';
  links = [
      {
          label: 'Servizi',
          link: './servizi',
          index: 0
      }, {
          label: 'Chi Siamo',
          link: './chisiamo',
          index: 1
      }, {
          label: 'Contatti',
          link: './contatti',
          index: 2
      }
    ];
  activeLink = this.links[1];
}
