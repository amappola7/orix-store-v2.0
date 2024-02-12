import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarProductsSectionComponent } from './similar-products-section.component';

describe('SimilarProductsSectionComponent', () => {
  let component: SimilarProductsSectionComponent;
  let fixture: ComponentFixture<SimilarProductsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimilarProductsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimilarProductsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
