import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivierComponent } from './divier.component';

describe('DivierComponent', () => {
  let component: DivierComponent;
  let fixture: ComponentFixture<DivierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
