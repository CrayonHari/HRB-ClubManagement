import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubAdminPageComponent } from './club-admin-page.component';

describe('ClubAdminPageComponent', () => {
  let component: ClubAdminPageComponent;
  let fixture: ComponentFixture<ClubAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubAdminPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
