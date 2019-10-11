import { Component, Injector } from '@angular/core';
import { ImgLazyComponent } from './img-lazy/img-lazy.component';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  src: string = '';
  title = 'angularElements';
  // constructor() {
  //   alert('j');
  //   setTimeout(() => {
  //     this.src =
  //       'https://image.shutterstock.com/image-photo/multiethnic-group-women-together-against-600w-1277154829.jpg';
  //   }, 5500);
  // }
  // constructor(private injector: Injector) {
  //   const elements: any[] = [[ImgLazyComponent, 'app-img-lazy']];
  //   for (const [component, name] of elements) {
  //     const el = createCustomElement(component, { injector: this.injector });
  //     customElements.define(name, el);
  //   }
  // }
}
