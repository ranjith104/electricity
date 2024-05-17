import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerAccountComponent } from './consumer-account.component';

describe('ConsumerAccountComponent', () => {
  let component: ConsumerAccountComponent;
  let fixture: ComponentFixture<ConsumerAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumerAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsumerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
