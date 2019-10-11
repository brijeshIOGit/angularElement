import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgFullScreenComponent } from './img-full-screen.component';

describe('ImgFullScreenComponent', () => {
  let component: ImgFullScreenComponent;
  let fixture: ComponentFixture<ImgFullScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgFullScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
