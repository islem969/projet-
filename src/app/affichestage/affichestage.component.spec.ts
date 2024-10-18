import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichestageComponent } from './affichestage.component';

describe('AffichestageComponent', () => {
  let component: AffichestageComponent;
  let fixture: ComponentFixture<AffichestageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichestageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichestageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
