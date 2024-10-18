import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichedemandeComponent } from './affichedemande.component';

describe('AffichedemandeComponent', () => {
  let component: AffichedemandeComponent;
  let fixture: ComponentFixture<AffichedemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichedemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichedemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
