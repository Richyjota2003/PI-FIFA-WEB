import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComoJugadorComponent } from './create-como-jugador.component';

describe('CreateComoJugadorComponent', () => {
  let component: CreateComoJugadorComponent;
  let fixture: ComponentFixture<CreateComoJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateComoJugadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateComoJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
