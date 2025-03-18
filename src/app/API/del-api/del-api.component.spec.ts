import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelApiComponent } from './del-api.component';

describe('DelApiComponent', () => {
  let component: DelApiComponent;
  let fixture: ComponentFixture<DelApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
