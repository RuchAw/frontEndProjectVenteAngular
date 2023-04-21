import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRolesComponent } from './details-roles.component';

describe('DetailsRolesComponent', () => {
  let component: DetailsRolesComponent;
  let fixture: ComponentFixture<DetailsRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
