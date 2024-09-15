import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsConductedComponent } from './events-conducted.component';

describe('EventsConductedComponent', () => {
  let component: EventsConductedComponent;
  let fixture: ComponentFixture<EventsConductedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsConductedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsConductedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
