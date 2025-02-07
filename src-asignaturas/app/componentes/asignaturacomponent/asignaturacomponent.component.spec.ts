import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturacomponentComponent } from './asignaturacomponent.component';

describe('AsignaturacomponentComponent', () => {
  let component: AsignaturacomponentComponent;
  let fixture: ComponentFixture<AsignaturacomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignaturacomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaturacomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
