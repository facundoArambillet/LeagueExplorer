import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardSectionComponent } from './item-card-section.component';

describe('ItemCardSectionComponent', () => {
  let component: ItemCardSectionComponent;
  let fixture: ComponentFixture<ItemCardSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemCardSectionComponent]
    });
    fixture = TestBed.createComponent(ItemCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
