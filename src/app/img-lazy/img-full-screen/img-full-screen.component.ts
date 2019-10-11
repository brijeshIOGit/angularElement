import {
  Component,
  OnInit,
  ElementRef,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-img-full-screen',
  templateUrl: './img-full-screen.component.html',
  styleUrls: ['./img-full-screen.component.css']
})
export class ImgFullScreenComponent implements OnInit {
  public element;
  isFullImage: boolean = false;
  @Output() closePopup = new EventEmitter();
  constructor(private el: ElementRef) {
    this.element = el;
  }

  ngOnInit() {}
  hidePopup() {
    this.isFullImage = false;
    this.closePopup.next(true);
  }
}
