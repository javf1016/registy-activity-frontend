import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneracionTurnosComponent } from './generacion-turnos.component';

describe('GeneracionTurnosComponent', () => {
  let component: GeneracionTurnosComponent;
  let fixture: ComponentFixture<GeneracionTurnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneracionTurnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneracionTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
