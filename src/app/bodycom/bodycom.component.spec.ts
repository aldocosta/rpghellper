import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodycomComponent } from './bodycom.component';

describe('BodycomComponent', () => {
  let component: BodycomComponent;
  let fixture: ComponentFixture<BodycomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodycomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodycomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
