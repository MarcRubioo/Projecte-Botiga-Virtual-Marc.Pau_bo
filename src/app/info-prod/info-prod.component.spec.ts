import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProdComponent } from './info-prod.component';

describe('InfoProdComponent', () => {
  let component: InfoProdComponent;
  let fixture: ComponentFixture<InfoProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
