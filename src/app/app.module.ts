import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  Injector,
  ApplicationRef,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgLazyComponent } from './img-lazy/img-lazy.component';
import { ImgLazyModule } from './img-lazy/img-lazy.module';
import { RouteComponent } from './route.component';

@NgModule({
  declarations: [AppComponent, RouteComponent],
  imports: [BrowserModule, AppRoutingModule, ImgLazyModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef) {
    const elements: any[] = [[ImgLazyComponent, 'img-lazy']];
    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
    appRef.bootstrap(AppComponent);
  }
}
