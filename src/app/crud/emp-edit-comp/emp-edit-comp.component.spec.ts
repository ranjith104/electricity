import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpEditCompComponent } from './emp-edit-comp.component';

describe('EmpEditCompComponent', () => {
  let component: EmpEditCompComponent;
  let fixture: ComponentFixture<EmpEditCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpEditCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpEditCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
