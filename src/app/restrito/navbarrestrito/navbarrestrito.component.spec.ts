import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarrestritoComponent } from './navbarrestrito.component';

describe('NavbarrestritoComponent', () => {
  let component: NavbarrestritoComponent;
  let fixture: ComponentFixture<NavbarrestritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarrestritoComponent]
    });
    fixture = TestBed.createComponent(NavbarrestritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
