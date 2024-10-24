import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDeJugadoresComponent } from './listado-de-jugadores.component';

describe('ListadoDeJugadoresComponent', () => {
  let component: ListadoDeJugadoresComponent;
  let fixture: ComponentFixture<ListadoDeJugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoDeJugadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoDeJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
