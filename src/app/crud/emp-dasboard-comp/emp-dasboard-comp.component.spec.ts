import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDasboardCompComponent } from './emp-dasboard-comp.component';

describe('EmpDasboardCompComponent', () => {
  let component: EmpDasboardCompComponent;
  let fixture: ComponentFixture<EmpDasboardCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpDasboardCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpDasboardCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
