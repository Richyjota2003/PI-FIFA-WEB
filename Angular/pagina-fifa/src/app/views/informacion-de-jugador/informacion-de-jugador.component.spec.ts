import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionDeJugadorComponent } from './informacion-de-jugador.component';

describe('InformacionDeJugadorComponent', () => {
  let component: InformacionDeJugadorComponent;
  let fixture: ComponentFixture<InformacionDeJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionDeJugadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionDeJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
