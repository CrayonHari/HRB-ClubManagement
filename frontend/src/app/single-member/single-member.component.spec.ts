import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMemberComponent } from './single-member.component';

describe('SingleMemberComponent', () => {
  let component: SingleMemberComponent;
  let fixture: ComponentFixture<SingleMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleMemberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
