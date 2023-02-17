import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryActivityComponent } from './registry-activity.component';

describe('RegistryActivityComponent', () => {
  let component: RegistryActivityComponent;
  let fixture: ComponentFixture<RegistryActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistryActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistryActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
