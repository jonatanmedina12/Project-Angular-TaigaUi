import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushComponent } from './push.component';

describe('PushComponent', () => {
  let component: PushComponent;
  let fixture: ComponentFixture<PushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PushComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
