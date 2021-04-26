import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingGuideComponent } from './cooking-guide.component';

describe('CookingGuideComponent', () => {
  let component: CookingGuideComponent;
  let fixture: ComponentFixture<CookingGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
