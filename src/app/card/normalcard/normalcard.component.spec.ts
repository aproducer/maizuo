import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalcardComponent } from './normalcard.component';

describe('NormalcardComponent', () => {
  let component: NormalcardComponent;
  let fixture: ComponentFixture<NormalcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
