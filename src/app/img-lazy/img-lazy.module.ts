import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgLazyComponent } from './img-lazy.component';
import { ImgFullScreenComponent } from './img-full-screen/img-full-screen.component';

@NgModule({
  declarations: [ImgLazyComponent, ImgFullScreenComponent],
  imports: [CommonModule],
  // exports: [ImgLazyComponent],
  entryComponents: [ImgLazyComponent, ImgFullScreenComponent]
})
export class ImgLazyModule {}
