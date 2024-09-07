import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondifencialComponent } from './condifencial.component';

describe('CondifencialComponent', () => {
  let component: CondifencialComponent;
  let fixture: ComponentFixture<CondifencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CondifencialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CondifencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
