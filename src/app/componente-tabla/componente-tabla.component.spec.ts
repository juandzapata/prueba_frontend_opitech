import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTablaComponent } from './componente-tabla.component';

describe('ComponenteTablaComponent', () => {
  let component: ComponenteTablaComponent;
  let fixture: ComponentFixture<ComponenteTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
