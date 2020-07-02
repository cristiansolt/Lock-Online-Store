import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandaFinalComponent } from './comanda-final.component';

describe('ComandaFinalComponent', () => {
  let component: ComandaFinalComponent;
  let fixture: ComponentFixture<ComandaFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComandaFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandaFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
