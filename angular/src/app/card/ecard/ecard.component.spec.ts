import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcardComponent } from './ecard.component';

describe('EcardComponent', () => {
  let component: EcardComponent;
  let fixture: ComponentFixture<EcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
