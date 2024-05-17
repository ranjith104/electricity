import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddCompComponent } from './emp-add-comp.component';

describe('EmpAddCompComponent', () => {
  let component: EmpAddCompComponent;
  let fixture: ComponentFixture<EmpAddCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpAddCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpAddCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
