import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaCompletaComponent } from './galeria-completa.component';

describe('GaleriaCompletaComponent', () => {
  let component: GaleriaCompletaComponent;
  let fixture: ComponentFixture<GaleriaCompletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaCompletaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaleriaCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
