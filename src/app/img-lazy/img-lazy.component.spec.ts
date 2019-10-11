import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgLazyComponent } from './img-lazy.component';

describe('ImgLazyComponent', () => {
  let component: ImgLazyComponent;
  let fixture: ComponentFixture<ImgLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
