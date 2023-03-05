import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmusiccomponentComponent } from './modalmusiccomponent.component';

describe('ModalmusiccomponentComponent', () => {
  let component: ModalmusiccomponentComponent;
  let fixture: ComponentFixture<ModalmusiccomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalmusiccomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalmusiccomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
