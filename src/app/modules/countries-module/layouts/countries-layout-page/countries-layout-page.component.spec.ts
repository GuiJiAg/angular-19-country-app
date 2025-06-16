import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesLayoutPageComponent } from './countries-layout-page.component';

describe('CountriesLayoutPageComponent', () => {
  let component: CountriesLayoutPageComponent;
  let fixture: ComponentFixture<CountriesLayoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesLayoutPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
