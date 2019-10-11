import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  ElementRef,
  HostListener,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewEncapsulation,
  ViewChild,
  Renderer2,
  Inject
} from '@angular/core';
import { ImgFullScreenComponent } from './img-full-screen/img-full-screen.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-img-lazy',
  templateUrl: './img-lazy.component.html',
  styleUrls: ['./img-lazy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class ImgLazyComponent implements OnInit {
  @Input() src: string;
  @Input() alt: string;
  @Output() isVisible = new EventEmitter();
  state = {
    visible: false,
    loaded: false
  };
  @ViewChild('fullImg', { static: false })
  fullImg: ElementRef;
  @ViewChild(ImgFullScreenComponent, { static: false })
  imgCmp: ImgFullScreenComponent;

  isFullImage: boolean = false;

  constructor(
    private el: ElementRef,
    private cd: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.calcVisibility();
    }, 500);
  }

  private setState(key, value) {
    this.state = { ...this.state, [key]: value };
    this.cd.detectChanges();
  }
  private calcVisibility() {
    const top = this.el.nativeElement.getBoundingClientRect().top;

    if (top <= window.innerHeight && !this.state.visible) {
      this.setState('visible', true);
      this.customEvent(true);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onscroll(e) {
    this.calcVisibility();
  }
  onLoad() {
    this.setState('loaded', true);
  }
  private customEvent(val) {
    // To check id the element is in viewPort using document querrySelector
    const domEvent = new CustomEvent('is-visible');
    this.el.nativeElement.dispatchEvent(domEvent);
  }

  fullScreen() {
    this.document.body.appendChild(this.imgCmp.element.nativeElement);
    this.imgCmp.isFullImage = true;
  }
  closeFullScreen() {
    this.document.body.removeChild(this.imgCmp.element.nativeElement);
    this.imgCmp.isFullImage = false;
  }
}
