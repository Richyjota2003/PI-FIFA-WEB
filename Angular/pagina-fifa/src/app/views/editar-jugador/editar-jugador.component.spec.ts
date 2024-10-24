import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarJugadorComponent } from './editar-jugador.component';

describe('EditarJugadorComponent', () => {
  let component: EditarJugadorComponent;
  let fixture: ComponentFixture<EditarJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarJugadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
