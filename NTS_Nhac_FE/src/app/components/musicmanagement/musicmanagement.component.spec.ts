import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicmanagementComponent } from './musicmanagement.component';

describe('MusicmanagementComponent', () => {
  let component: MusicmanagementComponent;
  let fixture: ComponentFixture<MusicmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
